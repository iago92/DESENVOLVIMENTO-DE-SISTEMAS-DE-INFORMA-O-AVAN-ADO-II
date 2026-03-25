import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function CustomButton({title, onPress}) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

}

const styles = StylesSheet.create
({
button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
},
buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
}
});