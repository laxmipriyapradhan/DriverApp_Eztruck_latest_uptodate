import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {primaryColor} from '../Utils/Colors';
import AppLogo from '../Utils/Logo';
import CustomDropDown from '../Utils/CustomDropdown';
import { loginSuccess } from '../Utils/loginReducer';

const Alias = ({navigation}) => {
  const userProfile = useSelector(state => state?.login?.user?.info);
  console.log('userProfile', userProfile);
  const dispatch = useDispatch()

  const [email, setEmail] = useState(userProfile?.primary_email);
  const [userName, setUserName] = useState('');

  const handleNext = () => {
    dispatch(loginSuccess(userProfile));
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 40}}>
        <Text style={{fontSize: 22, fontWeight: '500'}}>Alias</Text>
      </View>
      <MaterialCommunityIcons
        name={'arrow-left-bold-outline'}
        size={20}
        color="#000"
        style={{marginLeft: 10, position: 'absolute', left: 10, top: 70}}
      />
      <View style={{}}>
        <View
          style={{
            backgroundColor: '#d6d6d6',
            borderRadius: 100,
            height: 100,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <MaterialCommunityIcons
            name={'account-circle-outline'}
            size={60}
            color={"#999999"}
          />
        </View>
      </View>

      <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
        <Text style={{color: 'black'}}>Alias</Text>
      </View>
      <View style={[styles.inputView]}>
        <FontAwesome6
          name={'at'}
          size={20}
          color="#000"
          style={{width: 20, height: 20, marginRight: 10}}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter your  alias"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
        <Text style={{color: 'black'}}>Display name</Text>
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
          placeholder="Enter your jname"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setUserName(text)}
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
          bottom: 150,
        }}
        onPress={handleNext}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{color: '#FFF', fontSize: 16}}>Save and continue</Text>
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
        <TouchableOpacity onPress={handleNext}>
          <Text style={{color: primaryColor}}>Skip Alias creation for now</Text>
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
    width: '100%',
  },
  inputText: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
};

export default Alias;
