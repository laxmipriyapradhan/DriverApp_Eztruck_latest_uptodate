
import { useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native'

import MapView, { Marker } from 'react-native-maps';
import {GOOGLE_MAPS_APIKEY} from '../utils/Constants'
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../utils/imagePath';

const Home = () => {

   
    const [locationPoints, setlocationPoints] = useState(
        {
            pickupCords: {
                latitude: 30.7046,
                longitude: 76.7179,
                latitudeDelta: 0.0922,
                longitudeDelta:0.0421,
            },
            droplocationCords: {
                latitude: 30.7333,
                longitude: 76.7794,
                latitudeDelta: 0.0922,
                longitudeDelta:0.0421,
            }
        }
    )
        const mapRef =useRef()
    const { pickupCords, droplocationCords } = locationPoints
    return (
        <View style={styles.container}>
            <MapView
            ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={pickupCords}>
                    <Marker coordinate={pickupCords}
                    image={imagePath.icCurloc}/>
                    <Marker coordinate={droplocationCords} 
                    image={imagePath.icGeenMarker}/>

                   
                <MapViewDirections
                    origin={pickupCords}
                    destination={droplocationCords}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    optimizeWaypoints={true}
                    onReady={result =>{
                        mapRef.current.fitToCoordinates(result.coordinates,{edgePadding:{
                            right:30,
                            bottom:300,
                            left:30,
                            top:100
                        }})
                    }}
                />


            </MapView>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }

})
    

export default Home
