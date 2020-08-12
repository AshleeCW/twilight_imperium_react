import React from 'react';
import {Text, TextInput, View} from 'react-native';

// @ts-ignore
const Random_Race_Form = ({ fields }) => {
    const fieldKeys = Object.keys(fields);

    return fieldKeys.map((key) => {
        const field = fields[key];
        return (
            <View key={key}>
                <Text>{field.label}</Text>
                <TextInput {...field.inputProps} />
            </View>
        );
    });
};

export default Random_Race_Form;