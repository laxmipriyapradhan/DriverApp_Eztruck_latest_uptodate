import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Utils/loginReducer';

const HomeScreen = () => {

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
