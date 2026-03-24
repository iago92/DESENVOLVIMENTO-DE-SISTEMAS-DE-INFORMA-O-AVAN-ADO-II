import React from "react";
import { ScrollView, Text, View } from "react-native";
import { scrollStyles } from "../../styles/scrollStyles";

export default function ScrollViewScreen() {
    return (
        <ScrollView contentContainerStyle={scrollStyles.container}>
            {Array.from({ length: 20 }).map((_, index) => (
                <View key={index} style={scrollStyles.item}>
                    <Text style={scrollStyles.text}>Item {index + 1}</Text>
                </View>
            ))}
        </ScrollView>
    );
}