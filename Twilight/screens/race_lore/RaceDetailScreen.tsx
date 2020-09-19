import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Component} from 'react';
import React, {useEffect, useState} from 'react';
import {backs, globalStyles} from '../../styles/global';
import {
  getCoreRaceList,
  getRaceByID,
  getRaceLore,
  getWinnuLore,
} from '../services/race_service';
import {RaceModel} from '../../models/RaceModel';
import Panel from 'react-native-panel';

// @ts-ignore
export function RaceDetailScreen({route, navigation: navigation}) {
  const [race, setRace] = useState<RaceModel | undefined>(undefined);

  useEffect(() => {
    // TODO implement function on press with raceID when selecting the race
    // const id = navigation.getParam('raceId', {});
    const id = route.params.raceId;
    // const groupId = navigation.getParam('raceId');
    const fetchedRace: RaceModel = getRaceByID(id);
    setRace(fetchedRace);
  }, []);
  const width = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('../../assets/space_background_reduced_v1.png')}
      style={globalStyles.background}>
      <View style={globalStyles.RandomRaceForm}>
        <Image
          source={race?.image}
          style={{height: width / 3, width: width / 3}}
        />
        <Text>Faction: {race?.name}</Text>
        <Text>Homeworld: {race?.homeWorld}</Text>
      </View>

      {/*<ScrollView*/}
      {/*    contentContainerStyle={styles.contentContainerStyle}>*/}
      {/*    <Text>{getRaceLore(race?.id)}</Text>*/}

      {/*</ScrollView>*/}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 20,
  },
});
