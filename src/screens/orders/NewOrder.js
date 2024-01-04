import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Homemap from '../../map/Homemap';

const NewOrder = ({newBook,onAccept,onDeCline}) => {
// const onDecline=()=>{
// console.warn('Decline the Ride')
// }
// const onAccept=()=>{
//     console.warn('Accept the Ride')
//     }

  return (
    <View style={Styles.modalContainer}>
       
          <View style={Styles.modalContent}>
            <View style={{ height: 200 }}>
            <Homemap/>
            </View>
            {/* Title */}
            <Text style={Styles.titleText}>Ride Request</Text>

            {/* Text under the title */}
            <Text style={{ textAlign: 'center',}}>This is your ride details</Text>
            <Text style={{ textAlign: 'center',marginBottom:20 }}>{newBook.type}</Text>

            {/* Accept and Cancel buttons */}
            <View style={Styles.buttonContainer}>
              <Pressable style={Styles.cancelButton} onPress={onDeCline}>
                <Text style={Styles.buttonText1}>Decline</Text>
              </Pressable>

              <Pressable style={Styles.acceptButton} >
                <Text style={Styles.buttonText} onPress={onAccept}>Accept</Text>
              </Pressable>
            </View>
          </View>
        </View>
  )
}

export default NewOrder

const Styles = StyleSheet.create({
 modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
          backgroundColor: '#fff',
          borderRadius: 30,
          height: 400,
          width: 340,
        },
        titleText: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
          color:'#EE272E',
          textAlign: 'center',
          marginTop:10
        },
        buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        acceptButton: {
          backgroundColor: 'transparent',
          padding: 12,
          borderRadius: 30,
          flex: 1,
          marginRight: 5,
          borderWidth:1,
          borderColor:'#EE272E',
          margin:5
        },
        cancelButton: {
          backgroundColor: '#EE272E',
          padding: 10,
          borderRadius: 30,
          flex: 1,
          margin: 5,
        },
        buttonText: {
          color: 'red',
          textAlign: 'center',
        }, 
        buttonText1: {
            color: '#fff',
            textAlign: 'center',
          }, 
})