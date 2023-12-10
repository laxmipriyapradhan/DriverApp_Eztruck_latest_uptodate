import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {primaryColor} from '../Utils/Colors';
import AppLogo from '../Utils/Logo';
import CustomDropDown from '../Utils/CustomDropdown';

const months = [
  {label: 'January', value: '01', days: 31},
  {label: 'February', value: '02', days: 28},
  {label: 'March', value: '03', days: 31},
  {label: 'April', value: '04', days: 30},
  {label: 'May', value: '05', days: 31},
  {label: 'June', value: '06', days: 30},
  {label: 'July', value: '07', days: 31},
  {label: 'August', value: '08', days: 31},
  {label: 'September', value: '09', days: 30},
  {label: 'October', value: '10', days: 31},
  {label: 'November', value: '11', days: 30},
  {label: 'December', value: '12', days: 31},
];
const years = Array.from({length: 70}, (_, index) => (1970 + index).toString());

const CareToShare = ({navigation}) => {
  const userProfile = useSelector(state => state?.login?.user?.info);
  console.log('userProfile', userProfile);

  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange = value => {
    console.log(value);
    setSelectedMonth(value);
  };

  const generateDays = () => {
    const month = months.find(m => m.label === selectedMonth);
    if (month) {
      return Array.from({length: month.days}, (_, i) => (i + 1).toString());
    }
    return [];
  };

  const [email, setEmail] = useState(userProfile?.primary_email);
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    navigation.navigate('Alias');
  };

  return (
    <View style={styles.container}>
      <View style={{marginVertical: 40}}>
        <Text style={{fontSize: 22, fontWeight: '500'}}>Care To Share</Text>
      </View>
      <MaterialCommunityIcons
        name={'arrow-left-bold-outline'}
        size={20}
        color="#000"
        style={{marginLeft: 10, position: 'absolute', left: 10, top: 70}}
      />
      <View style={{marginVertical: 20}}>
        <Text style={{textAlign: 'justify', lineHeight: 20}}>
          Care to share some more about yourself? This information will be
          available in your Real ID profile. It will be shared with other users
          should you choose to show them your Real ID.
        </Text>
      </View>

      <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
        <Text style={{color: 'black'}}>Where do you work?</Text>
      </View>
      <View style={[styles.inputView]}>
        <MaterialCommunityIcons
          name={'email-outline'}
          size={20}
          color="#000"
          style={{width: 20, height: 20, marginRight: 10}}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter your  company"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
          //   value={email}
          //   editable={false}
        />
      </View>

      <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
        <Text style={{color: 'black'}}>What’s your title/role?</Text>
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
          placeholder="Enter your job role"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setUserName(text)}
        />
      </View>

      <View style={{alignSelf: 'flex-start', marginVertical: 10}}>
        <Text style={{color: 'black'}}>When’s your birthday?</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginVertical: 10,
            }}>
            <Text style={{color: 'black'}}>Year</Text>
          </View>
          <CustomDropDown
            data={years}
            placeholder={'1985'}
            value={''}
            onChange={text => {
              console.log('text', text);
            }}
          />
        </View>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginVertical: 10,
            }}>
            <Text style={{color: 'black'}}>Month</Text>
          </View>
          <CustomDropDown
            data={months.map(month => month.label)}
            placeholder={'Month'}
            value={selectedMonth}
            onChange={handleMonthChange}
          />
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              marginVertical: 10,
            }}>
            <Text style={{color: 'black'}}>Day</Text>
          </View>
          <CustomDropDown
            data={generateDays()}
            placeholder={'Day'}
            value={''}
            onChange={text => {
              console.log('Day selected:', text);
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#ffeab6',
          width: '100%',
          padding: 10,
          borderRadius: 10,
          marginTop: 30,
        }}>
        <Text>Entering this information is completely optional.</Text>
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

export default CareToShare;
