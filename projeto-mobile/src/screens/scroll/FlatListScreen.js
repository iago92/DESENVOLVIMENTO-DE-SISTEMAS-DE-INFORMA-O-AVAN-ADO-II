import React from "react";
import { FlatList, Text, View } from 'react-native';
import { flatStyles } from "../../styles/scrollStyles";

const data = Array.from({ length: 80 }, (_, i) => ({ id: i.toString(), name: `Item ${i + 1}` }));

export default function FlatListScreen() {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={flatStyles.item}>
                    <Text style={flatStyles.text}>{item.name}</Text>
                </View>
            )}
            contentContainerStyle={flatStyles.container}
        />
    );
}