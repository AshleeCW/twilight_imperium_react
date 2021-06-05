import {
  Button,
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../../styles/global';
import races from '../../races/core_races.json';
import {RaceCard} from '../../components/RaceCard';
import {RaceModel} from '../../models/RaceModel';
import {getCoreRaceList} from '../services/race_service';
import {Image} from 'react-native-elements';
// @ts-ignore
export function RandomRaceScreen(this: any, {route, navigation: navigation}) {
  // const {numberOfPlayers} = route.params;
  // const {pokExpansion} = route.params;

  const [raceList, setRaceList] = useState<RaceModel[]>([]);
  const playerCount = route.params.PLAYER_COUNT;
  const pok = route.params.POK; //Boolean on whether expansion is in use. Will need a separate list if using this or push other races to existing list
  const races = route.params.RACES;
  useEffect(() => {
    setRaceList(races);
  }, [races]);


  //TODO number of players must be less than max number of available races

  // function randomIntFromInterval(min, max) {
  //   // min and max included
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  // const setRaceListToPlayCount = () => {
  //   //   for (let i = 0; i < playerCount; i++) {
  //   let rand = randomIntFromInterval(1, raceList.length);
  //   //     let chosenRace = raceList[rand];
  //   //     // @ts-ignore
  //   //     generatedRaceList().push(chosenRace);
  //   //   }
  //
  //   while (raceList.length > playerCount) {
  //
  //   }
  // };

  const racePressed = (raceId: number) => {
    console.log('Displaying info about Race, ', raceId);
    navigation.navigate('RaceLoreListScreen', {raceId: raceId});
  };

  const renderRaces = (item: unknown) => {
    //setRaceListToPlayCount();
    console.log('Player Count:' + playerCount.toString());
    return (
      <RaceCard
        race={item.item}
        onClick={() => {
          racePressed(item.item._groupId);
        }}
      />
    );
  };
  //setRaceListToPlayCount();
  console.log('RaceList Length: ' + raceList.length);
  const width = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('../../assets/space_background_reduced_v1.png')}
      style={globalStyles.background}>
      <View>
        <FlatList
          data={raceList}
          renderItem={renderRaces}
          containerCustomStyle={style.carousel}
          itemWidth={width * 0.8}
          layout="default"
          removeClippedSubviews={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}
const style = StyleSheet.create({
  containerBottom: {
    flex: 4,
    padding: 10,
    paddingBottom: 90,
    alignItems: 'center',
  },
  carousel: {
    marginVertical: 10,
    flexGrow: 1,
  },
  container: {
    alignItems: 'stretch',
    flex: 1,
  },
});
