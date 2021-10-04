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

import LocationFunc from "./components/location";

import KofaLogo from "./public/images/logoWalkSafe.png";
import ContactsProvider from "./context/contactContext";
import RootStackNavigator from "./navigators/RootStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    //const [page, setPage] = useState("home");
    //const goHome = () => setPage("home");

    return (
        // <SafeAreaProvider>
        <ContactsProvider>
            <StatusBar style="auto" />
            <SafeAreaProvider style={styles.root}>
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <RootStackNavigator />
                    {/* <Image source={KofaLogo} style={styles.logo}></Image> */}
                </ImageBackground>
            </SafeAreaProvider>
        </ContactsProvider>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        // alignSelf: "center"
        // backgroundColor: "red"
        marginBottom: 100,
        //marginBottom: 20,
        // opacity: 0,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
        // position: "absolute",
        // zIndex: 1200
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
