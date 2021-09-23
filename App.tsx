import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import HomePage from "./pages/homePage";
import TimerPage from "./pages/timerPage";
import image from "./public/images/background.jpeg";

//const image = { uri: "./public/images/background.jpeg"};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={image}/> */}
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <StatusBar style="auto" />
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Walk Safe - KOF test!!</Text>
          <HomePage />
          <TimerPage />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",

  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  contentContainer: {
    marginRight: 30,
    marginLeft: 30,
  },
  text: {
    color: "white",
    backgroundColor: "green",
    borderRadius: 200,
  },
});
