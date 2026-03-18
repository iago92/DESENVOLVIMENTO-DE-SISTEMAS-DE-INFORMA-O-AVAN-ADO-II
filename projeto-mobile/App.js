import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <SafeAreaView>

      <HomeScreen />
    </SafeAreaView>
  );
}
