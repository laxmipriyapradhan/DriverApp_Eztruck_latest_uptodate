import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View, Modal, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import Homemap from '../../map/Homemap';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
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
  const modalStyles = {
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: colors.background,
      padding: 20,
      borderRadius: 20,
      height: 400,
      width: 340,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: colors.secondary,
      textAlign: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    acceptButton: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 30,
      flex: 1,
      marginRight: 5,
    },
    cancelButton: {
      backgroundColor: '#EE272E',
      padding: 10,
      borderRadius: 30,
      flex: 1,
      marginLeft: 5,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
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
          <Pressable onPress={openModal} style={buttonStyles.yourRideButton}>
            <Text style={styles.buttonText}>Your Ride</Text>
          </Pressable>
        </View>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={modalStyles.modalContainer}>
          {/* First container with map and loader */}


          {/* Second container with title and buttons */}
          <View style={modalStyles.modalContent}>
            <View style={{ height: 200 }}>
              <Homemap />
            </View>
            {/* Title */}
            <Text style={modalStyles.titleText}>Ride Request</Text>

            {/* Text under the title */}
            <Text style={{ textAlign: 'center', marginBottom: 40 }}>This is your ride details</Text>

            {/* Accept and Cancel buttons */}
            <View style={modalStyles.buttonContainer}>
              <Pressable style={modalStyles.acceptButton} onPress={() => {/* Handle accept */ }}>
                <Text style={modalStyles.buttonText} onPress={closeModal}>Decline</Text>
              </Pressable>

              <Pressable style={modalStyles.cancelButton} >
                <Text style={modalStyles.buttonText} onPress={() => {
                  // Handle accept logic here if needed
                  // Close the modal
                  navigation.navigate('ArrivedScreen'); // Navigate to ArrivedScreen
                }}>Accept</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    top: 5,
    left: 10,
    padding: 4,
    borderRadius: 30,
    backgroundColor: '#EE272E',
    zIndex: 1,
    alignItems: 'center',
  }
});
