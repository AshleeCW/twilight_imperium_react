import {BaseScreen} from './../BaseScreen';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {backs, globalStyles} from '../../styles/global';
import Random_Race_Form from '../../components/random_race_form';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';
import {
  getCoreRaceList,
  getRaceByID,
  randomIntFromInterval,
} from '../services/race_service';
import {RaceModel} from '../../models/RaceModel';

// @ts-ignore
export function RandomRaceOptionsScreen({route, navigation: navigation}) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [pokExpansion, setPoKExpansion] = useState(false);
  const [raceList, setRaceList] = useState<RaceModel[]>([]);

  //console.log(numberOfPlayers.toString());

  const generatedRaces: RaceModel[] = [];
  const generatePlayerCountRaceList = () => {
    while (generatedRaces.length < numberOfPlayers) {
      //console.log('Rand value: ' + rand.toString());
      let chosenRace = getRaceByID(
        randomIntFromInterval(0, getCoreRaceList().length),
      );
      console.log(
        'Random Number: ' + randomIntFromInterval(5, getCoreRaceList().length),
      );
      for (let i = 0; i < generatedRaces.length; i++) {
        while (chosenRace.id === generatedRaces[i].id) {
          chosenRace = getRaceByID(
            randomIntFromInterval(0, getCoreRaceList().length),
          );
        }
      }
      // @ts-ignore
      generatedRaces.push(chosenRace);
    }
  };

  const loadRandomRaces = () => {
    generatePlayerCountRaceList();
    setRaceList(generatedRaces);
    //print_to_console()
    navigation.navigate('RandomRaceScreen', {
      PLAYER_COUNT: numberOfPlayers,
      POK: false,
      RACES: generatedRaces,
    });
    console.log(generatedRaces.toString());
    console.log(
      'Random Number: ' + randomIntFromInterval(0, getCoreRaceList.length),
    );
  };
  //create list on player count to pass to next screen
  Random_Race_Form.prototype = {
    onConfirm: PropTypes.func.isRequired,
  };

  return (
    <ImageBackground
      source={require('../../assets/space_background_reduced_v1.png')}
      style={globalStyles.background}>
      <View style={globalStyles.RandomRaceForm}>
        <Text>How many players?</Text>
        <TextInput
          keyboardType={'numeric'}
          onChangeText={(text) => setNumberOfPlayers(text)}
        />
        <Text>Prophecy of Kings Expansion?</Text>
        <CheckBox
          title="Using Expansion"
          style={globalStyles.CheckBox}
          value={pokExpansion}
          onValueChange={setPoKExpansion}
          testID="isExpansionCheck"
        />

        <Button title={'Okay'} onPress={loadRandomRaces} />
      </View>
    </ImageBackground>
  );
}
