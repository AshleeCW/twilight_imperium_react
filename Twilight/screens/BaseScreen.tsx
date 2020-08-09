import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { globalStyles, images } from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';


export function BaseScreen(props: any) {  
  
  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['rgba(2,0,36,1)', 'rgba(9,42,121,1)', 'rgba(0,212,255,1)']}
            style={globalStyles.linearGradient}>
              {props.children}
    </LinearGradient>    
  ); 
}
