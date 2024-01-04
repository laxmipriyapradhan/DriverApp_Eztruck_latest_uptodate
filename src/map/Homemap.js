import { useState, useRef } from 'react';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const Homemap = () => {

  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0';
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [locationPoints, setlocationPoints] = useState(
    {
        pickupCords: {
            latitude: 30.7046,
            longitude: 76.7179,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        droplocationCords: {
            latitude: 30.7333,
            longitude: 76.7794,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }
)

const mapRef = useRef()
const { pickupCords, droplocationCords } = locationPoints

  return (
    <View style={styles.container}>
      <MapView
      ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        initialRegion={pickupCords}>
        
      <MapViewDirections
        origin={origin}
        // destination={destination}
        destination={droplocationCords}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
    strokeColor="black"
      />
    </MapView>
       
    </View >
    )
}

export default Homemap

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

  // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}>