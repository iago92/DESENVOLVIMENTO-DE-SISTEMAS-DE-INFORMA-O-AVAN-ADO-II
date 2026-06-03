import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Mensagem from './components/Mensagem'

export default function questao5() {
    const [texto, setTexto] = useState('');
    return (
        <View>
            <TextInput
                placeholder="Digite seu texto"
                value={texto}
                onChangeText={setTexto}
            />
            <Mensagem texto={texto}/>
        </View>
    );
}