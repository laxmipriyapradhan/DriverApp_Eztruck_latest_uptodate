import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../utils/loginReducer';
import { enableLegacyWebImplementation } from 'react-native-gesture-handler';

const OtpScreen = ({ route,navigation }) => {

  const userdata = useSelector(state=>state?.login?.user?.data?.authTokens)
  // console.log("userdata",userdata);


  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [showResend, setShowResend] = useState(false);
  
  const [isVerified, setIsVerified] = useState(false);

 const phoneNumber= route?.params?.phoneNumber
  console.log("phoneNumber",phoneNumber);

  // useEffect(() => {
  //   const waitForOtp = () => {
  //     setTimeout(() => {
  //       setShowResend(true);
       
  //     }, 30000);
  //   };
  //   waitForOtp();
  // }, [showResend]);

  useEffect(() => {
    let timeoutId;

    const waitForOtp = () => {
      timeoutId = setTimeout(() => {
        setShowResend(true);
      }, 30000);
    };

    waitForOtp();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showResend]);





  const authkey = '395607ATzxdWwee644b4b4bP1';
  const verifyOTP = async () => {
    console.log('Verifying OTP:', otp1, otp2, otp3, otp4);

    if (isVerified) {
      // If already verified, show an alert and return
      Alert.alert('OTP Already Verified', 'You have already verified the OTP.', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
      return;
    }

    const number = route?.params?.phoneNumber;
    const url = `https://control.msg91.com/api/v5/otp/verify?otp=${otp1}${otp2}${otp3}${otp4}&mobile=91${number}`;

    try {
      const response = await fetch(url, {
        headers: {
          accept: 'application/json',
          authkey: authkey,
        },
      });

      console.log('API Response:', response);

      if (response.ok) {
        const responseData = await response?.json();
        console.log('Response Data:', responseData);

        if (responseData?.message == "OTP verified success") {


          Alert.alert('Verified', 'OTP Verification Successful', [
            {
              text: 'OK',
              onPress: () => {
                setIsVerified(true);
                navigation.navigate('Home');
              },
            },
          ]);
          dispatch(loginSuccess(userdata));
          

          // setIsVerified(true);
          // navigation.navigate('Home');
        } else {
          console.log('Incorrect or incomplete OTP');
          Alert.alert('Error', 'Incorrect or incomplete OTP');
        }
      } else {
        console.error('Error:', response.status);
        if (response.status === 422) {
          console.log('Status code 422 reached');
          // Assuming 422 status code indicates that OTP is already verified
          Alert.alert('OTP Already Verified', 'You have already verified the OTP.', [
            {
              text: 'OK',
              onPress: () => {
                setIsVerified(true);
                navigation.navigate('Home', {AuthToken: AuthToken});
              },
            },
          ]);
        }
    
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const resendVerifyOTP = () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', authkey: '395607ATzxdWwee644b4b4bP1' }
    };

    fetch(`https://control.msg91.com/api/v5/otp/retry?retrytype=resend%20OTP&mobile=91${phoneNumber}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

  }





  const inputStyles = (value) => ({
    ...styles.input,
    borderColor: value !== '' ? 'red' : 'black',
    backgroundColor: value !== '' ? 'mistyrose' : 'white',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your phone number</Text>

      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text style={{ color: '#EE272E', marginBottom: 20 }}>Change phone number?</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {[otp1, otp2, otp3, otp4].map((otp, index) => (
          <TextInput
            key={index}
            style={{
              ...{
                height: 50,
                width: 50,
                borderWidth: 1,
                borderColor: '#EE272E',
                borderRadius: 10,
                textAlign: 'center',
                fontSize: 20,
                margin: 10,
              },
              ...inputStyles(otp),
            }}
            keyboardType="numeric"
            maxLength={1}
            value={otp}
            onChangeText={(text) => {
              if (text.length === 1) {
                if (index === 0) setOtp1(text);
                else if (index === 1) setOtp2(text);
                else if (index === 2) setOtp3(text);
                else if (index === 3) setOtp4(text);
                if (index < 3) {
                  this[`otpInput${index + 1}`].focus();
                }
              }
            }}
            ref={(input) => {
              this[`otpInput${index}`] = input;
            }}
          />
        ))}
      </View>
      {showResend ? (
        <Text style={styles.signInText}>
          Didn’t receive code?&nbsp;
          <Text
            style={styles.signInLink}
            onPress={resendVerifyOTP}
          >
             Resend again
          </Text>
        </Text>
      ) : (
        
        <Text style={styles.signInText}>
          Resend Code in{' '}
          <Text style={{ color: 'red' }}>30</Text> secs
        </Text>
      )}


      <TouchableOpacity mode="contained" style={styles.verify} onPress={verifyOTP}>
        <Text style={{ color: "white", fontSize: 16, }}>  Verify</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingTop: 10,
  },


  signInText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
  signInLink: {
    color: "#EE272E",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  verify: {
    width: '90%',
    height: 50,
    marginVertical: 80,
    borderRadius: 30,
    backgroundColor: '#EE272E',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OtpScreen;
