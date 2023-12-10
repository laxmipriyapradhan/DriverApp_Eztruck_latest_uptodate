import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {primaryColor} from '../Utils/Colors';
import AppLogo from '../Utils/Logo';

const RealId = ({navigation}) => {
  const userProfile = useSelector(state => state?.login?.user?.info);
  console.log('userProfile', userProfile);

  const [email, setEmail] = useState(userProfile?.primary_email);
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
navigation.navigate("CareToShare")
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 40}}>
        <Text style={{fontSize: 22, fontWeight: '500'}}>Real Id</Text>
      </View>
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
        <Text style={{color: 'black'}}>E-mail</Text>
      </View>
      <View style={[styles.inputView, {backgroundColor: '#999999'}]}>
        <MaterialCommunityIcons
          name={'email-outline'}
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
          value={email}
          editable={false}
        />
      </View>

      <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
        <Text style={{color: 'black'}}>User Name</Text>
      </View>
      <View style={styles.inputView}>
        <FontAwesome6
          name={'at'}
          size={20}
          color="#000"
          style={{width: 20, height: 20, marginRight: 10}}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter your username"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setUserName(text)}
        />
      </View>

      <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
        <Text style={{color: 'black'}}>First Name</Text>
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
          placeholder="Enter your first name"
          autoCapitalize="words"
          onChangeText={text => setFirstName(text)}
        />
      </View>

      <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
        <Text style={{color: 'black'}}>Last Name</Text>
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
          placeholder="Enter your last name"
          autoCapitalize="words"
          onChangeText={text => setLastName(text)}
        />
      </View>
      <View style={{flexDirection:'row', flex:1, justifyContent:'space-between'}}>
        <View style={{flex:0.3}}>
          <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
            <Text style={{color: 'black'}}>Country</Text>
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
              placeholder="+##"
              autoCapitalize="none"
              autoCorrect={false}
              // value={selectedLanguage}
              // onChangeText={text => setSelectedLanguage(text)}
            />
          </View>
        </View>
        <View style={{flex:0.8, marginLeft:10}}>
          <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
            <Text style={{color: 'black'}}>Mobile</Text>
          </View>
          <View style={styles.inputView}>
            <AntDesign
              name={'mobile1'}
              size={20}
              color="#000"
              style={{width: 20, height: 20, marginRight: 10}}
            />
            <TextInput
              style={styles.inputText}
              placeholder="xxxx - xx xx xxx"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType='numeric'
              maxLength={10}
              // value={selectedLanguage}
              // onChangeText={text => setSelectedLanguage(text)}
            />
          </View>
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
          bottom: 100,
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

export default RealId;
