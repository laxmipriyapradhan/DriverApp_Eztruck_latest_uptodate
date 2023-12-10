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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {primaryColor} from '../Utils/Colors';
import axios from 'axios';
import {registerSuccess} from '../Utils/loginReducer';
import {useDispatch} from 'react-redux';

const CreateAccount = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCreate = () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/;

    console.log('passwordRegex', !passwordRegex.test(password));

    if (!passwordRegex.test(password)) {
      setError(
        'Password must contain at least 10 characters including one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)',
      );
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
    };

    const response = axios
      .post('https://api-shield.rukkor.dev/api/users/register', payload)
      .then(response => {
        console.log('Register successful:', response.data);
        dispatch(registerSuccess(response.data));
        navigation.navigate('ProfileSetup');
      })
      .catch(error => {
        console.error('Register error:', error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{marginVertical: 40}}>
          <Text style={{fontSize: 22, fontWeight: '500'}}>
            Create new account
          </Text>
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
        <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
          <Text style={{color: 'black'}}>Password</Text>
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
        <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
          <Text style={{color: 'black'}}>Confirm Password</Text>
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
            placeholder="Confirm your password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#000"
            style={{width: 20, height: 20}}
            onPress={togglePasswordVisibility}
          />
        </View>
        {error ? (
          <Text style={{color: 'red', alignSelf: 'flex-start'}}>{error}</Text>
        ) : null}
        <View style={styles.passswordContainer}>
          <Text style={styles.listItem}>
            Pick strong password, requirements are atleast one of each, minimum
            10 charecters
          </Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>- Minimum 10 characters long</Text>
            <Text style={styles.listItem}>
              - At least one uppercase letter (A-Z)
            </Text>
            <Text style={styles.listItem}>
              - At least one lowercase letter (a-z)
            </Text>
            <Text style={styles.listItem}>- At least one number (0-9)</Text>
            <Text style={styles.listItem}>
              - At least one symbol (!@#$%^&*)
            </Text>
          </View>
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
            bottom: 150,
          }}
          onPress={handleCreate}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: '#FFF', fontSize: 16}}>Next</Text>
            <MaterialCommunityIcons
              name={'arrow-right-bold-outline'}
              size={20}
              color="#fff"
              style={{marginLeft: 10}}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 100,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: primaryColor}}>Cancel account creation</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 20,
            alignItems: 'center',
          }}>
          <AppLogo width={30} />
        </View>
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
  passswordContainer: {
    backgroundColor: '#ffeab6',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  listContainer: {
    marginLeft: 15,
  },
  listItem: {
    marginTop: 5,
  },
};

export default CreateAccount;
