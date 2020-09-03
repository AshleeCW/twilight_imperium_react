import React from 'react';
import PropTypes from 'prop-types';
import {Text, Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RaceModel} from '../models/RaceModel';
import {Card} from 'react-native-elements';


export function RaceCard(props: any) {

    RaceCard().prototype = {
        race: PropTypes.instanceOf(RaceModel),
        onClick: PropTypes.func,
    }

    const cardPressed = () => {
        props.onClick(props.invite.id);
    }
    const ignorePressed = () => {
        props.onIgnore(props.invite.id);
    }

    return (
        <TouchableOpacity style={style.card} testID="inviteCard" onPress={cardPressed}>
            <Card testID="racrCard">
                <Text style={style.text} testID="raceName"></Text>
                <Text style={style.text} testID="raceWorld"></Text>
                <View style={style.updateButtons} testID="inviteButtons">
                    <Button title="Details" onPress={() => {cardPressed()}}/>

                </View>
            </Card>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create( {
    card: {
        padding: 0,
        alignContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 18,
        margin: 5,
    },
    updateButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
});
