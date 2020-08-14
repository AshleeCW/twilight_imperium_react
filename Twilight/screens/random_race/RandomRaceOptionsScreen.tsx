import {BaseScreen} from "./../BaseScreen";
import {Button, Image, ImageBackground, View} from "react-native";
import React, {useState} from "react";
import {backs, globalStyles} from "../../styles/global";
import Random_Race_Form from "../../components/random_race_form";
import CheckBox from "@react-native-community/checkbox";

// @ts-ignore
export function RandomRaceOptionsScreen({navigation: navigation}) {
    const [IsUsingPoK, setIsUsingPoK] = useState(false);


    const setIsUsingProphecyOfKings = (state: boolean) => {
        if (state === IsUsingPoK) {
            return;
        }
        setIsUsingPoK(state);
    }
    return (
        <ImageBackground source={require('../../assets/space_background_reduced_v1.png')} style={globalStyles.background}>
            <View style={globalStyles.RandomRaceForm}>
            <Random_Race_Form fields={{
                number_of_players: {
                    label: 'Number of Players',
                    inputProps: {
                        keyboardType: 'numeric',
                    },
                }
            }}>



            </Random_Race_Form>
                <CheckBox title="Yes" style={globalStyles.CheckBox}  checked={IsUsingPoK} onPress={() => setIsUsingProphecyOfKings(true)} testID="isPoKCheck"/>
                <CheckBox style={globalStyles.CheckBox} title='No' checked={!IsUsingPoK} onPress={() => setIsUsingProphecyOfKings(false)} testID="isNotLFGCheck"/>


                    <Button title={"Okay"} onPress={useState}/>
                </View>


        </ImageBackground>

    )
}
