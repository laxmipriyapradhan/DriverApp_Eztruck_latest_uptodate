import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Pressable, StyleSheet, Text, View, Modal, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import Homemap from '../../map/Homemap';
import { useNavigation } from '@react-navigation/native';


const ArrivedScreen = () => {
  const navigation = useNavigation();

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
      width: 124,
      marginRight: 10,
    },
    yourRideButton: {
      //   backgroundColor: colors.secondary,
      borderRadius: 30,
      paddingVertical: 12,
      width: 124,
      borderWidth: 1,
      borderColor: 'red'

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
      flexDirection: 'row',
      justifyContent: 'space-between',
      //   marginLeft:40
    },
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          // onPress={() => navigation.toggleDrawer()}
          style={styles.menu}
        >
          <Icon name="menu" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <Homemap />
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
          <Icon name="navigation" size={30} color="red" style={styles.navIcon} />
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={buttonStyles.walletButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-evenly' }}>
              <Icon name="call" size={20} color="#fff" />
              <Text style={styles.buttonText}>Call</Text>
            </View>
          </Pressable>
          <Pressable style={buttonStyles.yourRideButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-evenly', }}>
              <Icon name="message" type="MaterialCommunityIcons" size={20} color='#EE272E' />
              <Text style={styles.buttonText1}>Message</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.section3}>
          <Text>
            Distance
          </Text>
          <Text>Time</Text>
          <Text>Customer Support</Text>
        </View>
        <View>
          <Pressable style={styles.Btn1} onPress={() => {
            navigation.navigate('DropOffScreen')
          }}>
            <Text style={styles.buttonText}>Arrived</Text>

          </Pressable>
        </View>
      </View>

    </View>
  );
};
export default ArrivedScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheetContainer: {
    position: 'absolute',
    height: 300,
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
    marginLeft: 40
  },
  profileDetails: {
    marginTop: 8,
    alignItems: 'flex-start',
    marginLeft: 20,
    // justifyContent:'center'
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center', // Center text horizontally
  },
  profileInfo: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center', // Center text horizontally
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
    marginTop: 20,
    // padding: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonText1: {
    color: '#EE272E',
    textAlign: 'center',
    fontSize: 16,
  },
  menu: {
    position: 'absolute',
    top: 5,
    left: 10,
    padding: 4,
    borderRadius: 30,
    backgroundColor: '#EE272E',
    zIndex: 1,
    alignItems: 'center',
  },
  section3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    padding: 20,
    color: '#EE272E'
  },
  Btn1: {
    backgroundColor: '#EE272E',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    borderColor: '#EE272E'
  },
  navIcon: {
    marginLeft: 50,
    // top: 5,
    // left: 10,
    padding: 6,
    borderRadius: 30,
    backgroundColor: '#fff',
    // Android
    elevation: 5,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  }
});
