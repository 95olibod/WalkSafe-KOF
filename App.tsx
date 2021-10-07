import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ContactsProvider from "./context/contactContext";
import DeviceProvider from "./context/deviceContext";
import InformationProvider from "./context/informationContext";
import RootStackNavigator from "./navigators/rootStackNavigator";
import image from "./public/images/background.jpeg";

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
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
