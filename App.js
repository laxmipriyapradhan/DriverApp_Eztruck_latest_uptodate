import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './src/authentication/Registration';
import Login from './src/authentication/Login';
import OtpScreen from './src/authentication/OtpScreen';
import Onboarding from './src/screens/onboardingscreens/Onboarding';
import Onboard from './src/screens/onboardingscreens/Onboard';
import Welcome from './src/screens/welcome/Welcome';
// import Splash from './src/screens/splash/Splash';
import HomeScreen from './src/screens/home/HomeScreen';
import SplashScreen from 'react-native-splash-screen'
import ArrivedScreen from './src/screens/home/ArrivedScreen';
import DropOffScreen from './src/screens/home/DropOffScreen';
const Stack = createStackNavigator();




function App() {
  useEffect(() => {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Back" }}
        />
         <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ title: "Back" }}
        />
          <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArrivedScreen"
          component={ArrivedScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="DropOffScreen"
          component={DropOffScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import SplashScreen from 'react-native-splash-screen'
// import MapView from "react-native-maps";



// export default function App() {
//   SplashScreen.hide();
//   return (
//     <View style={styles.container}>
//     {/*Render our MapView*/}
//       <MapView
//         style={styles.map}
//         //specify our coordinates.
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     </View>
//   );
// }
// //create our styling code:
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1, //the container will fill the whole screen.
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });