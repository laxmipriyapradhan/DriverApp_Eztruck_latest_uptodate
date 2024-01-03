import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View, Modal, Image, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import Homemap from '../../map/Homemap';
import { useNavigation } from '@react-navigation/native'
import NewOrder from '../orders/NewOrder';

const HomeScreen = () => {
  const navigation = useNavigation();
  //function for online /ofline
  const [isOnline, setIsOnline] = useState(false)
  const onSwitchPress = () => {
    setIsOnline(!isOnline)
  }
//useSome Dummy Bookings to show in popup 
const[book,setBook]=useState({

})
const [newBook,setNewBook]=useState({
  id:'1',
  type:'Dala Auto',
 
  originLatitude:37.78825,
  originLongitude: -122.4324,

  destLatitude:37.78825,
  destLongitude:-122.4324,

})
const onDeCline=()=>{
  setNewBook(null)
}
const onAccept=(newBook)=>{
  setBook(newBook)
}

////Styles for homeScreen
  const colors = {
    primary: '#EE272E',
    secondary: '#EE272E',
    background: '#ECF0F1',
    text: '#2C3E50',
  };
  const fonts = {
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },
    subheading: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#EE272E',
    },
  };
  const buttonStyles = {
    walletButton: {
      backgroundColor: colors.primary,
      borderRadius: 30,
      paddingVertical: 10,
      width: 104,
      marginRight: 10,
    },
    yourRideButton: {
      backgroundColor: colors.secondary,
      borderRadius: 30,
      paddingVertical: 12,
      width: 104,
    },
  };

  const imageStyles = {
    profilePhoto: {
      width: 60,
      height: 60,
      borderRadius: 5,
      marginRight: 8,
      borderWidth: 2,
      borderColor: colors.primary,
      justifyContent: 'center', marginLeft: 40
    },
  };
  return (
    <View style={styles.container}>

      <Homemap />
      <Pressable
        // onPress={() => navigation.toggleDrawer()}
        style={[styles.onlineBtn]}
        onPress={onSwitchPress}
      >
        {
          isOnline
            ? <Text style={styles.BalnceText}>Online</Text>
            : <Text style={styles.BalnceText}>Offline</Text>
        }


      </Pressable>
      <Pressable
        // onPress={() => navigation.toggleDrawer()}
        style={[styles.menu, { top: 10, left: 10 }]}
      >
        <Icon name="menu" size={35} color="white" />
      </Pressable>


      <Pressable
        style={[styles.roundBtn, { top: 10, right: 10 }]}
      >
        <Icon name="person" size={35} color="white" />
      </Pressable>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../../assets/Asset3.png')}
            style={[styles.profilePhoto, imageStyles.profilePhoto]}
          />
          <View style={styles.profileDetails}>
            <Text style={[styles.profileName, fonts.heading]}>John Doe</Text>
            <Text style={[styles.profileInfo]}>
              Tata Ace
            </Text>
          </View>
        </View>
        <View style={styles.totalEarningContainer}>
          <Text style={[styles.totalEarningLabel, fonts.subheading]}>
            Total Earning
          </Text>
          <Text style={[styles.totalEarningValue, fonts.heading]}>₹878</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={buttonStyles.walletButton}>
            <Text style={styles.buttonText}>Wallet</Text>
          </Pressable>
          <Pressable style={buttonStyles.yourRideButton}>
            <Text style={styles.buttonText} onPress={()=>navigation.navigate('ArrivedScreen')}>Your Ride</Text>
          </Pressable>
        </View>
      </View>
    
    {newBook && <NewOrder newBook={newBook}
      onDeCline={onDeCline}
      onAccept={()=>onAccept(newBook)}
      /> }
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetContainer: {
    position: 'absolute',
    height: 260,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
    // marginLeft:40
  },
  profileDetails: {
    marginTop: 8,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
    marginLeft: 40// Center text horizontally
  },
  profileInfo: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginLeft: 40// Center text horizontally
  },
  totalEarningContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 20,
    padding: 20,
    color: '#EE272E'
  },
  totalEarningLabel: {
    fontWeight: 'bold',
    color: '#EE272E'
  },
  totalEarningValue: {
    color: 'red',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop:20,
    padding: 16
  },
  walletButton: {
    backgroundColor: 'red',
    borderRadius: 30,
    paddingVertical: 20,
    width: 20,
    marginRight: 20,
  },
  yourRideButton: {
    backgroundColor: 'gray',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  menu: {
    position: 'absolute',
    // top: 5,
    // left: 10,
    padding: 4,
    borderRadius: 30,
    backgroundColor: '#EE272E',
    zIndex: 1,
    alignItems: 'center',
  },
  onlineBtn: {
    backgroundColor: '#EE272E',
    position: 'absolute',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    top: 10,
    width: 100,
    left: Dimensions.get('window').width / 2 - 50
  },
  roundBtn: {
    position: 'absolute',
    padding: 4,
    borderRadius: 30,
    backgroundColor: '#EE272E',

  },
  BalnceText: {
    color: '#fff',
    fontSize: 16,
  }
});
