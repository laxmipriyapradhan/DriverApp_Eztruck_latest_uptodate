import { Pressable, StyleSheet, Text, View, Modal,Image } from 'react-native'
import React, { useState } from 'react'
import Homemap from '../../map/Homemap'

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (

    <View style={styles.container}>
      <Homemap />
      <View style={styles.bottomSheetContainer}>
        <View style={[styles.chooseYourRide, styles.ctaprimaryPosition]}>
          <View style={styles.profileContainer}>
            {/* Profile Photo */}
            <Image
              source={{ uri: 'https://example.com/profile.jpg' }}
              style={styles.profilePhoto}
            />

            {/* Profile Details */}
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileInfo}>Age: 30</Text>
              {/* Add more details as needed */}
            </View>
          </View>

          <Text style={[styles.totalEarning, styles.textFlexBox]}>
            Total Earning
          </Text>
          <Text style={[styles.text, styles.textFlexBox]}>₹878</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.childLayout]} />
          <View style={[styles.walletWrapper, styles.wrapperPosition]}>
            <Pressable >
              <Text style={[styles.wallet, styles.textTypo]}>Wallet</Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childLayout]} />
          <View style={[styles.yourRideWrapper, styles.wrapperPosition]}>
            <Pressable onPress={openModal}>
              <Text style={{ textAlign: 'center' }}>Your Ride</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Add your modal content here */}
            <Text>This is your ride details</Text>
            <Pressable onPress={closeModal}>
              <Text>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

  )
}

export default HomeScreen

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
    padding: 16,
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
  bottomSheetText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textFlexBox: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
  },
  totalEarning: {
    marginLeft: -155.5,
    textTransform: "capitalize",
    width: 137,
    color: "red",
    top: 0,
    // fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
    left: "50%",
    height: 43,
  },
  text: {
    marginLeft: 102.5,
    top: 5,
    lineHeight: 19,
    color: 'gray',
    width: 53,
    // fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
    left: "50%",
    height: 34,
  },
  chooseYourRide: {
    marginLeft: -155,
    top: 135,
    width: 311,
    height: 43,
  },
  wallet: {
    left: 6,
    color: '#fff',
    textAlign: "center",
    fontSize: 18,
    lineHeight: 23,
    position: "absolute",
    top: 0,
  },
  ctaprimary: {
    marginLeft: -48.5,
    borderRadius: 40,
    width: 97,
    backgroundColor: 'red',
    height: 34,
    top: 52,
    left: "50%",
  },
  frameChild: {
    // backgroundColor: Color.colorCrimson,
    left: 0,
  },
  ctaprimaryPosition: {
    left: "50%",
    position: "absolute",
  },
  frameParent: {
    top: 767,
    left: 32,
    width: 330,
    height: 50,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: 'red',
    left: 0,
  },
  wallet: {
    left: 6,
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 23,
    position: "absolute",
    top: 0,
  },
  walletWrapper: {
    width: 73,
    left: 41,
  },
  rectangleParent: {
    left: 0,
  },
  rectangleLayout: {
    width: 155,
    height: 50,
    top: 0,
    position: "absolute",
  },
  childLayout: {
    borderRadius: 30,
    width: 155,
    height: 50,
    top: 0,
    position: "absolute",
  },
  wrapperPosition: {
    height: 23,
    top: 13,
    position: "absolute",
  },
  textTypo: {
    // fontFamily: 18,
    fontWeight: "600",
  },
  yourRideClr: {
    color: 'gray',
    top: 0,
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: 'gray',
    borderWidth: 1.5,
    right: 0,
  },
  yourRide: {
    left: 15,
    textAlign: "center",
    // fontFamily: FontFamily.subheadWebLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 23,
    position: "absolute",
    fontSize: 118,
    color: 'gray',
  },
  yourRideWrapper: {
    left: 25,
    width: 105,
  },
  rectangleGroup: {
    right: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    height: 400,
    width: 340
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20, // Assuming a circular profile photo
    marginRight: 8,
  },
  profileDetails: {
    flex: 1, // Expand to take available space
    marginLeft: 8, // Add some spacing from the profile photo
    justifyContent: 'center', // Center content vertically
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileInfo: {
    fontSize: 14,
    color: '#555',
    // Add more styles as needed
  },

})