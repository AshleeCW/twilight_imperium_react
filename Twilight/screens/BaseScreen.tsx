/* eslint-disable prettier/prettier */
import React from 'react';
import {globalStyles} from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Image, ImageBackground, ScrollView, Text, View} from 'react-native';

export function BaseScreen(props: any) {
  return (

    <ScrollView>
      {props.children}
    </ScrollView>

  );
}
