/* eslint-disable prettier/prettier */
import React from 'react';
import {globalStyles} from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, View} from 'react-native';

export function BaseScreen(props: any) {
  return (

    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={['rgba(50,0,0,1)', 'rgba(9,42,121,1)', 'rgba(40,0,1,1)']}
      style={globalStyles.linearGradient}>
      {props.children}

        <Image source = {require('../assets/space_background_reduced.png')} testID={"logo"} />


      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Yes</Text>
  </View>

    </LinearGradient>
    
  );
}
