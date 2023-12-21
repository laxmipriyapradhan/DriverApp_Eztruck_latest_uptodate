import React, {Component}  from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ChooseDestination from './ChooseDestination'

const ChooseLocation =({ navigation  })=>{
    return (
        <View style= {styles.container}>
            <Text>Hello</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('ChooseDestination')}>
                <Text>welcome</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#2c3e50',
    },
})

export default ChooseLocation;