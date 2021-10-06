import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Device from "expo-device";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import CountdownTimer from "../components/countdownTimer";
import { SendSms } from "../components/smsSender";
import { useContacts } from "../context/contactContext";
import { DeviceContext } from "../context/deviceContext";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Timer">;

function TimerScreen({ navigation }: Props) {
    const {
        batteryLevel,
        locationLongitude,
        locationLatitude,
        deviceName,
        deviceModel,
        userText,
    } = useContext(DeviceContext);

    const { favouriteContacts } = useContacts();

    async function handleTimerFinished() {
        const favoritNumbers = favouriteContacts.map(
            (contact) => contact.phoneNumber
        );

        const result = await SendSms(
            favoritNumbers,
            deviceName,
            deviceModel,
            batteryLevel,
            locationLongitude,
            locationLatitude,
            userText
        );

        if (result === "sent") {
            //FÅ NOTIS
            navigation.navigate("Hem");
        } else if (result === "unknown") {
            //FÅ NOTIS
            setTimeout(() => {
                navigation.navigate("Hem");
            }, 500);
        }
        // Cancelled / Unavaliable
        else {
            // TODO: What happens when the message could not be sent?
            //FÅ NOTIS "MEDDELANDE HAR INTE SKICKATS"
            setTimeout(() => {
                navigation.navigate("Hem");
            }, 500);
        }
    }

    return (
        <View style={styles.container}>
            <CountdownTimer
                handleTimerFinished={handleTimerFinished}
                onStop={() => navigation.replace("EndTimerScreen")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
});

export default TimerScreen;
