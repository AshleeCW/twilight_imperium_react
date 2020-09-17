import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../../styles/global';
import {RaceModel} from '../../models/RaceModel';
import {getCoreRaceList} from '../services/race_service';
import {RaceCard} from '../../components/RaceCard';

// @ts-ignore
export function RaceLoreListScreen(this: any, {navigation: navigation}) {
  const [raceList, setRaceList] = useState<RaceModel[]>([]);

  useEffect(() => {
    const fetchedRaces: RaceModel[] = getCoreRaceList();
    setRaceList(fetchedRaces);
  }, []);

  const racePressed = (raceId: number) => {
    console.log('Displaying info about Race, ', raceId);
    navigation.navigate('RaceLoreListScreen', {raceId: raceId});
  };

  const renderRaces = (item: unknown) => {
    return (
      <TouchableOpacity onPress={racePressed}>
        <Image
          race={item.item}
          source={item.item.image}
          style={{height: 100, width: 100, marginTop:10}}
        />
      </TouchableOpacity>
    );
  };

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
      flexDirection:"row",

  },
  container: {
    alignItems: 'stretch',
    flex: 1,
  },
});
