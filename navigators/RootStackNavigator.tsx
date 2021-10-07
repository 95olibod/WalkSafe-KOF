import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ContactsScreen from "../screens/contactsScreen";
import EndTimerScreen from "../screens/endTimerScreen";
import HomeScreen from "../screens/homeScreen";
import InformationScreen from "../screens/informationScreen";
import TimerScreen from "../screens/timerScreen";

export type RootStackParamList = {
  Hem: undefined;
  Information: undefined;
  Kontakter: undefined;
  EndTimerScreen: undefined;
  Timer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          contentStyle: { backgroundColor: "transparent" },
          headerTitleAlign: "center",
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Hem" component={HomeScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="Kontakter" component={ContactsScreen} />
        <Stack.Screen
          name="Timer"
          component={TimerScreen}
          options={{ headerBackVisible: false }}
        />
        <Stack.Screen
          name="EndTimerScreen"
          component={EndTimerScreen}
          options={{ title: "", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
