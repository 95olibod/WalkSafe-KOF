import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CountdownTimer from "../components/countdownTimer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { useRoute } from "@react-navigation/core";

// type Props = NativeStackScreenProps<RootStackParamList, "EndTimer">;

//KOLLA DETTA!!!!!
interface Props {
    navigation: any;
    route: any;
}

function TimerScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <CountdownTimer
                navigation={navigation.navigate("EndTimerScreen")}
                route={navigation.navigate("Timer")}
            />
        </View>
    );
}

// navigation={navigation.navigate("EndTimer")} route={Props: "Contact"}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
});

export default TimerScreen;
