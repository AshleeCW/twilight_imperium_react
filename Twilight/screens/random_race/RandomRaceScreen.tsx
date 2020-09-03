import {Button, Dimensions, FlatList, Image, ImageBackground, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../../styles/global';
import races from '../../races/core_races.json';
import {RaceCard} from '../../components/RaceCard';
import {RaceModel} from "../../models/RaceModel";
import {getCoreRaceList} from "../services/race_service";
// @ts-ignore
export function RandomRaceScreen(this: any, {navigation: navigation}) {
  // const {numberOfPlayers} = route.params;
  // const {pokExpansion} = route.params;

  const [raceList, setRaceList] = useState<RaceModel[]>([]);

  useEffect(() => {
    const playerId = 2;
    //on render fetch characters
    const fetchedInvites: RaceModel[] = getCoreRaceList();

    setRaceList(fetchedInvites);
  }, []);

  //number of players must be less than max number of available races

  const racePressed = (raceId: number) => {
    console.log('Displaying info about Race, ', raceId);
    navigation.navigate('RaceLoreListScreen', {raceId: raceId});
  };

  const renderRaces = (item: unknown, index: number) => {
    return (
      <RaceCard
        race={item.item}
        onClick={() => {
          racePressed(item.item._groupId);
        }}
      />
    );
  };

  // const renderRaces = (item: unknown, index: number) => {
  //     return (
  //        // <RaceCard race={item.item} onClick={() => {racePressed(item.item.id)}}/>
  //     );
  // }
  const width = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('../../assets/space_background_reduced_v1.png')}
      style={globalStyles.background}>
      <FlatList
        data={raceList}
        renderItem={renderRaces}
        sliderWidth={width}
        containerCustomStyle={style.carousel}
        contentContainerCustomStyle={style.card}
        itemWidth={width * 0.8}
        layout="default"
        removeClippedSubviews={false}
      />
    </ImageBackground>
  );
}
const style = StyleSheet.create({
  containerBottom: {
    flex: 4,
    padding: 10,
    paddingBottom: 90,
    alignItems: "center",
  },
  carousel: {
    marginVertical: 10,
    flexGrow: 1,
  },
  container: {
    alignItems: "stretch",
    flex: 1,
  }
})
