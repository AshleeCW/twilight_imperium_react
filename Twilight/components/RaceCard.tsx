import React from 'react';
import PropTypes from 'prop-types';
import {Text, Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RaceModel} from '../models/RaceModel';
import {Card, Image} from 'react-native-elements';

export function RaceCard(props: any) {
  RaceCard.prototype = {
    race: PropTypes.instanceOf(RaceModel),
    onClick: PropTypes.func,
  };

  const imageURL = props.race.image;

  const cardPressed = () => {
    props.onClick(props.invite.id);
  };
  return (
    <TouchableOpacity
      style={style.card}
      testID="inviteCard"
      onPress={cardPressed}>
      <Card testID="raceCard">
        <Image
          source={{uri:imageURL}}
          style={{width: 200, height: 200}}
        />
        <View>
          <Text style={style.text} testID="raceName">
            {props.race.name}
          </Text>
          <Text style={style.text} testID="raceWorld">
            {props.race.homeWorld.name}
          </Text>
        </View>

        <View style={style.updateButtons} testID="detailButtons">
          <Button
            title="Details"
            onPress={() => {
              cardPressed();
            }}
          />
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  card: {
    padding: 0,
    alignContent: 'center',
  },
  text: {
    textAlign: 'right',
    fontSize: 18,
    margin: 5,
    color: 'black',
  },
  updateButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
