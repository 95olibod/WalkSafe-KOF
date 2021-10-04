import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "../screens/homeScreen";
import EndTimerScreen from "../screens/endTimerScreen";
import ContactsScreen from "../screens/contactsScreen";
import InformationScreen from "../screens/informationScreen";
import TimerScreen from "../screens/timerScreen";
import Constants from "expo-constants";

export type RootStackParamList = {
    Hem: undefined;
    Information: undefined;
    Kontakter: undefined;
    EndTimerScreen: undefined;
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
                <Stack.Screen name="Hem" component={HomeScreen} />
                <Stack.Screen
                    name="Information"
                    component={InformationScreen}
                />
                <Stack.Screen name="Kontakter" component={ContactsScreen} />
                <Stack.Screen name="Timer" component={TimerScreen} />
                <Stack.Screen
                    name="EndTimerScreen"
                    component={EndTimerScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
