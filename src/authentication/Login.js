import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loginSuccess, registerSuccess} from '../utils/loginReducer';

const Login = ({navigation}) => {

  const deviceType = Platform.OS == 'android' ? 1 : 2
 
  const dispatch = useDispatch();
  const [numberInput, setNumberInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [token, setToken] = useState('')
  
  const checkToken = async () => {

    const fcmToken = await messaging().getToken();
    console.log("eeeeeeee", fcmToken);

    setToken(fcmToken)
    console.log("fcmToken",fcmToken);

  }

  useEffect(() => {
    checkToken();
  }, [])


  const showMyDialog = () => {
    Alert.alert(
      "Error",
      "Mobile Number incorrect\nPlease enter the mobile number correctly",
      [{ text: "OK", onPress: () => { } }],
      { cancelable: false }
    );
  };

  const sendOtp = async () => {
     const customerData = {
      
      mobile_number: `+91${phoneNumber}`,
      token: token,
      device_type: deviceType,
     
    };

    console.log("customerData", customerData);
    try {
      const response = await axios.post(
        'http://13.200.75.208:4001/driver/login',
        customerData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      // console.log("response",response);
      
      if (response.data){
        // console.log("response.data", response.data);
         console.log("token", token);
        dispatch(registerSuccess(response.data))
      
        

        const url = `https://control.msg91.com/api/v5/otp?template_id=646b0553d6fc0550857a9702&mobile=91${phoneNumber}`;
    
        try {
          const otpResponse = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authkey: "395607ATzxdWwee644b4b4bP1", 
            },
          });
          
          
          if (otpResponse.ok) {
            // console.log("response.data1234", response.data);
            // console.log("response?.data?.authTokens", response?.data?.__v?.authTokens);
            navigation.navigate("OtpScreen", { phoneNumber: phoneNumber }, {authTokens:response?.data?.authTokens});
            // console.log("OTP Sent:", await otpResponse.json());
          } else {
            console.error("Error sending OTP:", otpResponse.status);
          }
        } catch (otpError) {
          console.error("Error sending OTP:", otpError);
        
        }
        
        
      }
    
      // Handle the response or do something with it if needed
    
    } catch (error) {
      if (error.response && error.response.status === 400) {
        navigation.navigate("Registration")
        
      } else {
        // Handle other types of errors
        console.error('An error occurred during the request:', error);
      
      }
    }




    
    // const customerData = {
    //   email: "demo@gmail.com",
    //   customer_name: "demo" ,
    //   mobile_number: `+91${phoneNumber}`,
    //   password: "Demo@12345",
    // };

    // console.log(customerData,"customerData");

    

    // try {
    //   const response = await axios.post(
    //     'http://13.200.75.208:4001/v1/users/signUp',
    //     customerData,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //       },
    //     }
    //   );
    //   console.log("response",response);
      
    //   if (response.data){
        
    //     navigation.navigate("Registration")
    //   }
    
    //   // Handle the response or do something with it if needed
    
    // } catch (error) {
    //   if (error.response && error.response.status === 400) {
    //     const url = `https://control.msg91.com/api/v5/otp?template_id=646b0553d6fc0550857a9702&mobile=91${phoneNumber}`;
    
    //     try {
    //       const otpResponse = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           authkey: "395607ATzxdWwee644b4b4bP1", // replace with your Msg91 key
    //         },
    //       });
          
    //       if (otpResponse.ok) {
            
    //         navigation.navigate("OtpScreen", { phoneNumber: phoneNumber });
    //         console.log("OTP Sent:", await otpResponse.json());
    //       } else {
    //         console.error("Error sending OTP:", otpResponse.status);
    //       }
    //     } catch (otpError) {
    //       console.error("Error sending OTP:", otpError);
        
    //     }
    //   } else {
    //     // Handle other types of errors
    //     console.error('An error occurred during the request:', error);
      
    //   }
    // }
    
    
    

    

    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with OTP</Text>
      <View style={styles.formContainer}>
        <TextInput
          onChangeText={(value) => {
            if (value.length === 10) {
              setNumberInput(true);
              setPhoneNumber(value);
            } else {
              setNumberInput(false);
            }
          }}
          placeholder="Enter your phone number"
          keyboardType="numeric"
          style={styles.input}
        />
        <Button
          onPress={() => {
            if (numberInput) {
              sendOtp();

            } else {
              showMyDialog();
            }
          }}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>Get OTP</Text>
        </Button>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.horizontalLine} />
        <Text style={styles.or}>or</Text>
        <View style={styles.horizontalLine} />
      </View>
      <View>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("../../assets/google-icon.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.signupText}>
          Don't have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("Registration")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    color: "#EE272E",
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 20,
    paddingHorizontal: 14,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 60,
    marginVertical: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 30,
    borderColor: "grey",
    color: "grey",
  },
  inputError: {
    borderColor: "red", // Change border color for error state
  },
  errorMessage: {
    color: "red",
    marginBottom: 8,
  },
  loginButton: {
    height: 55,
    marginVertical: 8,
    borderRadius: 30,
    backgroundColor: "#EE272E",
    alignItems: "center",
    justifyContent: "center",
    color: '#fff'
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
  googleButton: {
    height: 60,
    width: 140,
    margin: 10,
    borderWidth: 1,
    borderRadius: 40,
    color: "black",
    fontWeight: "800",
    alignSelf: "center",
    borderColor: "grey",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  googleImage: {
    width: 30,
    height: 30,
    marginRight: -10,
  },
  googleText: {
    color: "black",
    fontWeight: "600",
    alignSelf: "center",
    fontSize: 18,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  or: {
    fontSize: 18,
    color: "grey",
    paddingHorizontal: 10,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  signupText: {
    fontSize: 15,
    margin: 18,
    fontWeight: "bold",
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
  signupLink: {
    color: "#EE272E",
  },
});

export default Login;
