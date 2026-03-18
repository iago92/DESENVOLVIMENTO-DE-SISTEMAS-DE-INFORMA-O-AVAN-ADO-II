import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerModalNavigator from '../navigation/DrawerModalNavigator';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
