import {BaseScreen} from './BaseScreen';
import {Button, Image, ImageBackground, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/global';

// @ts-ignore
export function TitleScreen({navigation: navigation}) {
  return (
    <ImageBackground
      source={require('../assets/space_background_reduced_v1.png')}
      style={globalStyles.background}>
      <Image source={require('../assets/logo.png')} style={globalStyles.logo} />
      <View style={globalStyles.Buttons}>
        <Button
          title={'Random Race'}
          onPress={() => navigation.navigate('RandomRaceOptionsScreen')}
        />
        <Button
          title={'Create'}
          onPress={() => navigation.navigate('CreateMenu')}
        />
        <Button
          title={'Race Lore'}
          onPress={() => navigation.navigate('RaceLoreListScreen')}
        />
      </View>
    </ImageBackground>
  );
}
