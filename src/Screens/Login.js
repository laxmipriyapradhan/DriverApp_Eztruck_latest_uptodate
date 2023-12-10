/** @format */

import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import AppLogo from '../Utils/Logo';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {primaryColor} from '../Utils/Colors';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../Utils/loginReducer';

const Userlogin = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = () => {
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('Please enter your email');
      return;
    }

    if (!password.trim()) {
      setPasswordError('Please enter your password');
      return;
    }

    const payload = {
      primary_email: email,
      os_platform: 'ios',
      os_platform_version: '0.1.2',
      user_agent: 'user_agent223',
      device_name: 'device_name22',
      type: 'desktop',
      password: password,
      device_id: '123',
      language: selectedLanguage,
    };

    const response = axios
      .post('https://api-shield.rukkor.dev/api/users/login', payload)
      .then(response => {
        console.log('Login successful:', response.data);
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        console.error('Login error:', error);
        setPasswordError('Login failed. Please check your credentials.');
      });

    console.log('response', response);
  };

  const handleCreate = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{marginVertical: 40}}>
          <AppLogo />
        </View>
        <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
          <Text style={{color: 'black'}}>E-mail</Text>
        </View>
        <View style={styles.inputView}>
          <Icon
            name={'person-outline'}
            size={20}
            color="#000"
            style={{width: 20, height: 20, marginRight: 10}}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter your e-mail"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setEmail(text)}
          />
        </View>
        {emailError ? (
          <Text
            style={{
              color: 'red',
              marginTop: -5,
              alignItems: 'flex-start',
              width: '100%',
            }}>
            {emailError}
          </Text>
        ) : null}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
            <Text style={{color: 'black'}}>Password</Text>
          </View>
          <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
            <Text style={{color: primaryColor}}>Forgot Password</Text>
          </View>
        </View>
        <View style={styles.inputView}>
          <Icon
            name={'lock-open-outline'}
            size={20}
            color="#000"
            style={{width: 20, height: 20, marginRight: 10}}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Enter your password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
          />
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#000"
            style={{width: 20, height: 20}}
            onPress={togglePasswordVisibility}
          />
        </View>
        {passwordError ? (
          <Text
            style={{
              color: 'red',
              marginTop: -5,
              alignItems: 'flex-start',
              width: '100%',
            }}>
            {passwordError}
          </Text>
        ) : null}
        <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
          <Text style={{color: 'black'}}>Language</Text>
        </View>
        <View style={styles.inputView}>
          <AntDesign
            name={'earth'}
            size={20}
            color="#000"
            style={{width: 20, height: 20, marginRight: 10}}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Language"
            autoCapitalize="none"
            autoCorrect={false}
            value={selectedLanguage}
            onChangeText={text => setSelectedLanguage(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: primaryColor,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 20,
            position: 'absolute',
            width: '100%',
            bottom: 120,
          }}
          onPress={() => handleNext()}>
          <Text style={{color: '#FFF', fontSize: 16}}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 20,
            position: 'absolute',
            width: '100%',
            bottom: 50,
            borderWidth: 1,
            borderColor: primaryColor,
          }}
          onPress={handleCreate}>
          <Text style={{color: primaryColor, fontSize: 16}}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 30,
  },
  inputView: {
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderWidth: 0.7,
    borderColor: '#000',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  inputText: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
};

export default Userlogin;
