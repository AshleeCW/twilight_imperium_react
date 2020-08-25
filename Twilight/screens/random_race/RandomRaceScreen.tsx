import {Button, Image, ImageBackground, View} from "react-native";
import React from "react";
import {globalStyles} from "../../styles/global";
import races from '../../races/core_races.json';
import {RaceCard} from "../../components/race_card";
// @ts-ignore
export function RandomRaceScreen(this: any, {route, navigation: navigation}) {
    const { numberOfPlayers } = route.params;
    const { pokExpansion } = route.params;

    //number of players must be less than max number of available races
    console.log(numberOfPlayers, pokExpansion);

    for (let i = 0; i < numberOfPlayers; i++) {

       // console.log(races[i].name);
    }



    const racePressed = (raceId: number) => {
        console.log("Displaying info about Race, ", raceId);
        navigation.navigate('RaceLoreListScreen', {raceId: raceId});
    };

    // const renderRaces = (item: unknown, index: number) => {
    //     return (
    //        // <RaceCard race={item.item} onClick={() => {racePressed(item.item.id)}}/>
    //     );
    // }

    return (
        <ImageBackground source={require('../../assets/space_background_reduced_v1.png')} style={globalStyles.background}>
            <RaceCard>

            </RaceCard>
        </ImageBackground>

    )
}
