import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from '../styles/buttonStyles';

export default function CustomButton({title, onPress}) {
    return(
        <TouchableOpacity style={buttonStyles.button} onPress={onPress} >
            <Text style={buttonStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

}