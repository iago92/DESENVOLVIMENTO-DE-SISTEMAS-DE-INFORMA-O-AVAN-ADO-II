import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ImageBackground } from "react-native-web";
import OlaMundo from "./componentes/OlaMundo";

export default function App(){
  return(
    <View style={styles.container}>
      <OlaMundo nome = 'Iago Marques' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b6b6b6'
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
  },
});