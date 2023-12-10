import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {primaryColor} from '../Utils/Colors';
import AppLogo from '../Utils/Logo';
import { useSelector } from 'react-redux';

export default function ProfileSetup({navigation}) {
  const isLoggedIn = useSelector(state => state);
console.log("isLoggedIn", isLoggedIn);
  const cardData = [
    {
      title: 'Real ID',
      description:
        'With Real ID you can disclose your personal details like name, phone number, birthday, e-mail and more. Use your Real ID when interacted with trusted family, friends and colleagues',
    },
    {
      title: 'Alias',
      description:
        "Using your Alias you can choose an additional @alias with which you can join Spaces and interact with other users in communities where you're not comfortable sharing your personal details.",
    },
  ];

  const handleNext = () => {
    navigation.navigate('RealId');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Setup your profile</Text>
      <View style={{marginVertical: 20}}>
        <Text style={styles.subParagraph}>
          A Rukkor account is associated with two profiles, one which we call
          Real ID and one which is your Alias. You choose in which setting you
          wish to expose your true identity and which you wish to use an alias.
        </Text>
      </View>
      {cardData.map((card, index) => (
        <View style={styles.realCard} key={index}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>{card.title}</Text>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#fff',
                borderRadius: 100,
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'person-outline'} size={30} color={primaryColor} />
            </View>
          </View>
          <View style={{flex: 2.5}}>
            <Text style={styles.subParagraph}>{card.description}</Text>
          </View>
        </View>
      ))}
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
          bottom: 20,
          alignItems: 'center',
        }}>
        <AppLogo width={30} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  paragraph: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  subParagraph: {
    //   fontSize: 12,
    textAlign: 'left',
    textAlign: 'justify',
    lineHeight: 20,
  },
  realCard: {
    backgroundColor: '#e3e3e3',
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});
