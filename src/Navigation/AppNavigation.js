import {Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Userlogin from '../Screens/Login';
import CreateAccount from '../Screens/CreateAccount';
import ProfileSetup from '../Screens/ProfileSetup';
import RealId from '../Screens/RealId';
import HomeScreen from '../Screens/HomeScreen';
import store from '../Utils/store';
import {useSelector} from 'react-redux';
import CareToShare from '../Screens/CareToShare';
import Alias from '../Screens/Alias';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  console.log('isLoggedIn', isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Userlogin}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProfileSetup"
              component={ProfileSetup}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RealId"
              component={RealId}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CareToShare"
              component={CareToShare}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Alias"
              component={Alias}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
