import React from 'react';
import PropTypes from 'prop-types';
import {Text, Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RaceModel} from '../models/RaceModel';
import {Card, Image} from 'react-native-elements';
import images from '../races/c';

export function RaceCard(props: any) {
  RaceCard.prototype = {
    race: PropTypes.instanceOf(RaceModel),
    onClick: PropTypes.func,
  };

  console.log(props.race.image);

  const cardPressed = () => {
    props.onClick(props.invite.id);
  };
  return (
    <TouchableOpacity
      style={style.card}
      testID="inviteCard"
      onPress={cardPressed}>
      <Card testID="raceCard">
        <View>
          <Image source={props.race.image} style={style.image} />
          <Text style={style.text} testID="raceName">
            {props.race.name}
          </Text>

          <Text style={style.text} testID="raceWorld">
            {props.race.homeWorld}
          </Text>

          <Text style={style.text} testID="tech">
            {props.race.tech}
          </Text>
        </View>

        <View style={style.updateButtons} testID="detailButtons" />
      </Card>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  card: {
    alignSelf: 'baseline',
    width: '99.9%',
    padding: 0,
    alignContent: 'center',
  },
  text: {
    position: 'relative',
    top: -85,
    textAlign: 'right',
    fontSize: 18,
    margin: 5,
    color: 'black',
  },
  updateButtons: {
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
