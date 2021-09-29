import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import HomePage from "./pages/homePage";
import TimerPage from "./pages/timerPage";
import ContactsPage from "./pages/contactsPage";
import InformationPage from "./pages/informationPage";
import image from "./public/images/background.jpeg";
import EndTimerPage from "./pages/endTimerPage";
import ContactsProvider from "./context/contactContext";

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
                return (
                    <InformationPage onGoBack={goHome} onSetPage={setPage} />
                );
            case "timer":
                return <TimerPage onSetPage={setPage} />;
            case "endPage":
                return <EndTimerPage onSetPage={setPage} />;
        }
    };

    return (
        <ContactsProvider>
            <View style={styles.container}>
                <StatusBar style="auto" />
                {/* <Image source={image}/> */}
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View style={styles.contentContainer}>
                        <Text>Walk Safe - KOF test!!</Text>
                        {selectedPage()}
                    </View>
                </ImageBackground>
            </View>
        </ContactsProvider>
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
        height: "100%",
    },
});
