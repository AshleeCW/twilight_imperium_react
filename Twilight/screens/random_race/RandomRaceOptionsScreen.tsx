import {BaseScreen} from "./../BaseScreen";
import {Button, Image, ImageBackground, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {backs, globalStyles} from "../../styles/global";
import Random_Race_Form from "../../components/random_race_form";
import CheckBox from "@react-native-community/checkbox";
import PropTypes from "prop-types";
import {getCoreRaceList} from "../services/race_service";

// @ts-ignore
export function RandomRaceOptionsScreen({route, navigation: navigation}) {
    const [numberOfPlayers, setNumberOfPlayers] = useState("");
    const [pokExpansion, setPoKExpansion] = useState(false);

    function print_to_console(){
        console.log(numberOfPlayers.toString());
        console.log(pokExpansion.toString());
    };
    console.log(getCoreRaceList().length);

    const loadRandomRaces = () => {
        //print_to_console()
        navigation.navigate('RandomRaceScreen');
    };

    Random_Race_Form.prototype = {
        onConfirm: PropTypes.func.isRequired,
    };


    return (
        <ImageBackground source={require('../../assets/space_background_reduced_v1.png')} style={globalStyles.background}>

        <View style={globalStyles.RandomRaceForm}>
            <Text>How many players?</Text>
            <TextInput keyboardType={"numeric"} onChangeText={(text) => setNumberOfPlayers(text)}/>
            <Text>Prophecy of Kings Expansion?</Text>
            <CheckBox title="Using Expansion" style={globalStyles.CheckBox} value={pokExpansion} onValueChange={setPoKExpansion}
                      testID="isExpansionCheck"/>


            <Button title={"Okay"} onPress={loadRandomRaces}/>



        </View>
</ImageBackground>
    );

};


