import { View, Text, StyleSheet } from 'react-native';
import { homeStyles } from '../styles/homeStyles';

export default function HomeScreen() {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.subtitle}>
        <Text style={homeStyles.subtitle}>
          Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.
        </Text>
      </View>
    </View>
  );
}