import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import HomePage from "./pages/homePage";
import TimerPage from "./pages/timerPage";
import ContactsPage from "./pages/contactsPage";
import InformationPage from "./pages/informationPage";
import image from "./public/images/background.jpeg";
import EndTimerPage from "./pages/endTimerPage";
import KofaLogo from "./public/images/logoWalkSafe.png";

//const image = { uri: "./public/images/background.jpeg"};

export default function App() {
  const [page, setPage] = useState("home");
  const goHome = () => setPage("home");
  // const goBack = () => setPage(prevstate => { return {...prevstate}); FIX LATER. EN GUBBE PÅ DET

  const selectedPage = () => {
    switch (page) {
      case "home":
        return <HomePage onSetPage={setPage} />;
      // return <LoginPage color="green" />;
      case "contacts":
        return <ContactsPage onGoBack={goHome} onSetPage={setPage} />;
      case "information":
        return <InformationPage onGoBack={goHome} onSetPage={setPage} />;
      case "timer":
        return <TimerPage onSetPage={setPage} />;
      case "endPage":
        return <EndTimerPage onSetPage={setPage} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.contentContainer}>
          <Image source={KofaLogo} style={styles.logo}></Image>
        </View>
        <View>{selectedPage()}</View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "green",
    // height: "100%",
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
  logo: {
    width: 230,
    height: 150,
    marginTop: 180,
    alignSelf: "center",
  },
});
