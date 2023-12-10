import React from 'react';
import {View, Image} from 'react-native';
import {primaryColor} from './Colors';

const AppLogo = ({width = 100}) => {
  return (
    <View
      style={{
        backgroundColor: primaryColor,
        marginVertical: 20,
        borderRadius: 100,
        height: width,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../Assets/Logo.png')}
        style={{
          width: width * 0.5,
          height: width * 0.5,
        }}
      />
    </View>
  );
};

export default AppLogo;
