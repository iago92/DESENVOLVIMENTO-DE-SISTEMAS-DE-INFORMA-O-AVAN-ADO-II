import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { NavigationContainer } from "@react-navigation/native";
import DrawerModalNavigator from './src/navigation/DrawerModalNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerModalNavigator />
    </NavigationContainer>
  );
}