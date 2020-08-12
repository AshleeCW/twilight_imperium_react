import {BaseScreen} from "./../BaseScreen";
import {Button, Image, ImageBackground, View} from "react-native";
import React from "react";
import {backs, globalStyles} from "../../styles/global";
import Random_Race_Form from "../../components/random_race_form";

// @ts-ignore
export function RandomRaceOptionsScreen({navigation: navigation}) {
    return (
        <ImageBackground source={require('../../assets/space_background_reduced_v1.png')} style={globalStyles.background}>
            <View style={backs.testBacks}>
            <Random_Race_Form fields={{
                number_of_players: {
                    label: 'Number of Players',
                    inputProps: {
                        keyboardType: 'numeric',
                    },
                },
                expansion: {
                    label: 'Prophecy of Kings?',
                    inputProps: {
                        radioGroup: true,
                    },
                },
            }}>


            </Random_Race_Form>
            </View>

        </ImageBackground>

    )
}