import { View, Text, StyleSheet } from 'react-native';
import { homeStyles } from '../styles/homeStyles';

export default function HomeScreen() {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Atividade Avaliativa 01</Text>
      <Text style={homeStyles.subtitle}>
        Desenvolvimento de Sistemas II
      </Text>
      <View style={homeStyles.subtitle}>
        <Text style={homeStyles.subtitle}>
          Explore os recursos de Modais e Listas (FlatList, SectionList e ScrollView) 
          através do menu lateral e das abas inferiores.
        </Text>
      </View>
    </View>
  );
}