import {BaseScreen} from "./../BaseScreen";
import {Button, Image, ImageBackground, View} from "react-native";
import React from "react";
import {globalStyles} from "../../styles/global";
import Random_Race_Form from "../../components/random_race_form";

// @ts-ignore
export function RandomRaceOptionsScreen({navigation: navigation}) {
    return (
        <ImageBackground source={require('../../assets/space_background_reduced_v1.png')} style={globalStyles.background}>
        <Random_Race_Form>

        </Random_Race_Form>

        </ImageBackground>

    )
}