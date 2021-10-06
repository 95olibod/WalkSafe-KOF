import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import HomeScreen from "./screens/homeScreen";
import TimerScreen from "./screens/timerScreen";
import ContactsPage from "./screens/contactsScreen";
import InformationPage from "./screens/informationScreen";
import image from "./public/images/background.jpeg";
import EndTimerScreen from "./screens/endTimerScreen";

import LocationFunc from "./components/location";

import KofaLogo from "./public/images/logoWalkSafe.png";
import ContactsProvider from "./context/contactContext";
import RootStackNavigator from "./navigators/RootStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DeviceProvider from "./context/deviceContext";
import InformationProvider from "./context/informationContext";

export default function App() {
  return (
    <ContactsProvider>
      <DeviceProvider>
         <InformationProvider>
        <SafeAreaProvider style={styles.root}>
          <StatusBar style="light" />
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <RootStackNavigator />
            {/* <Image source={KofaLogo} style={styles.logo}></Image> */}
          </ImageBackground>
        </SafeAreaProvider>
            </InformationProvider>
      </DeviceProvider>
    </ContactsProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //marginBottom: 100,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    marginRight: 30,
    marginLeft: 30,
  },
  logo: {
    width: 230,
    height: 150,
    marginTop: 30,
    alignSelf: "center",
  },
});
