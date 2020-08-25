import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { RadioButton } from 'react-native-paper';


// @ts-ignore
const Random_Race_Form = ({ fields }) => {
    const fieldKeys = Object.keys(fields);

    return fieldKeys.map((key) => {
        const field = fields[key];
        const [checked, setChecked] = React.useState('first');
        return (

            <View key={key}>
                <Text>{field.label}</Text>
                <TextInput {...field.inputProps} />
            </View>

        );
    });
};

export default Random_Race_Form;
