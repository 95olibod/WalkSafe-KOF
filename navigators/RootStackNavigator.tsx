import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomePage from "../pages/homePage";
import EndTimerPage from "../pages/endTimerPage";
import ContactsPage from "../pages/contactsPage";
import InformationPage from "../pages/informationPage";
import TimerPage from "../pages/timerPage";
import Constants from "expo-constants";

export type RootStackParamList = {
    Hem: undefined;
    About: undefined;
    Information: undefined;
    Contact: undefined;
    EndTimer: undefined;
    Timer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "red",
    },
    root: {
        marginTop: 500,
    },
    // header: {
    //     marginTop: Constants.statusBarHeight
    // },
};

export default function RootStackNavigator() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
                screenOptions={
                    {
                        //headerStyle: { backgroundColor: "red" }
                        // headerTransparent: true, // denna vill vi kanske ha
                        // containedTransparentModal: true
                    }
                }
            >
                <Stack.Screen name="Hem" component={HomePage} />
                <Stack.Screen name="Information" component={InformationPage} />
                <Stack.Screen name="Contact" component={ContactsPage} />
                <Stack.Screen name="Timer" component={TimerPage} />
                <Stack.Screen name="EndTimer" component={EndTimerPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
