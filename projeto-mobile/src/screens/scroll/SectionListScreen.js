import React from "react";
import { SectionList, Text, View, } from 'react-native';
import { sectionStyles } from "../../styles/scrollStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const sections = [
    { title: 'Seção 1', data: [' Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 4', 'Item 6'] },
    { title: 'Seção 2', data: [' Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11'] },
    { title: 'Seção 3', data: [' Item 12', 'Item 13', 'Item 14', 'Item 15'] },
];

export default function SectionListScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={sectionStyles.container}>
                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item + index}

                    renderItem={({ item }) => (
                        <View style={sectionStyles.item}>
                            <Text style={sectionStyles.text}>{item}</Text>
                        </View>
                    )}

                    renderSectionHeader={({ section }) => (
                        <View style={{ backgroundColor: '#fff' }}>
                            <Text style={sectionStyles.header}>{section.title}</Text>
                        </View>
                    )}

                    stickySectionHeadersEnabled={true}
                    ListFooterComponent={<View style={{ height: 40 }} />}
                />
            </View>
        </SafeAreaView>
    );
}