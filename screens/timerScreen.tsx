import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Device from "expo-device";
import React from "react";
import { StyleSheet, View } from "react-native";
import CountdownTimer from "../components/countdownTimer";
import { SendSms } from "../components/smsSender";
import { useContacts } from "../context/contactContext";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Timer">;

function TimerScreen({ navigation }: Props) {
    const { favoriteContacts } = useContacts();

    async function handleTimerFinished() {
        let deviceName = Device.deviceName;
        let deviceModel: string = Device.modelId;
        if (deviceName === null) {
            deviceName = "namn okänt";
        }
        if (!deviceModel) {
            deviceModel = "okänd enhet";
        }
        const favoritNumbers = favoriteContacts.map(
            (contact) => contact.phoneNumber
        );
        const result = await SendSms(favoritNumbers, deviceName, deviceModel);

        if (result === "sent") {
            navigation.navigate("EndTimerScreen");
        } else if (result === "unknown") {
            navigation.navigate("EndTimerScreen");
        }
        // Cancelled / Unavaliable
        else {
            // TODO: What happens when the message could not be sent?
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
