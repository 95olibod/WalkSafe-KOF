import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import HomePage from "./pages/homePage"
import image from "./public/images/background.jpeg"

//const image = { uri: "./public/images/background.jpeg"};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={image}/> */}
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>Walk Safe - KOF test!!</Text>
      <HomePage/>
      <StatusBar style="auto" />
      </ImageBackground> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
