import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {backs, globalStyles} from '../../styles/global';
import {getCoreRaceList, getRaceByID} from '../services/race_service';
import {RaceModel} from '../../models/RaceModel';

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

  return (
    <ImageBackground
      source={require('../../assets/space_background_reduced_v1.png')}
      style={globalStyles.background}>
      <View style={globalStyles.RandomRaceForm}>
        <Text>{race?.name}</Text>
      </View>
    </ImageBackground>
  );
}
