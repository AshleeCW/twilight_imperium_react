import {BaseScreen} from "./BaseScreen";
import {Button, Image, View} from "react-native";
import React from "react";
import {globalStyles} from "../styles/global";

export function TitleScreen(props: any) {
    return (
        <BaseScreen>
            <Image source = {require('../assets/logo.png')} style={globalStyles.logo}/>
            <View style={globalStyles.Buttons}>

                <Button title={"Random Race"} onPress={null}></Button>
                <Button title={"Create"} onPress={null}></Button>
                <Button title={"Race Lore"} onPress={null}></Button>
                <Button title={"Ipsum"} onPress={null}></Button>

            </View>

        </BaseScreen>
    );
}