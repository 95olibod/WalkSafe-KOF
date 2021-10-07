import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { StyleSheet, Image, View } from "react-native";
import CountdownTimer from "../components/countdownTimer";
import { SendSms } from "../components/smsSender";
import { useContacts } from "../context/contactContext";
import { DeviceContext } from "../context/deviceContext";
import { InformationContext } from "../context/informationContext";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import KofaLogo from "../public/images/logoWalkSafe.png";

type Props = NativeStackScreenProps<RootStackParamList, "Timer">;

function TimerScreen({ navigation }: Props) {
    const {
        batteryLevel,
        locationLongitude,
        locationLatitude,
        deviceName,
        deviceModel,
    } = useContext(DeviceContext);

    const {
        includeLocation,
        includeBattery,
        personalMessage,
        addPersonalMessage,
    } = useContext(InformationContext);

    const { favouriteContacts } = useContacts();

    async function handleTimerFinished() {
        const favoritNumbers = favouriteContacts.map(
            (contact) => contact.phoneNumber
        );

        const result = await SendSms(
            favoritNumbers,
            deviceName,
            deviceModel,
            locationLongitude,
            locationLatitude,
            personalMessage,
            batteryLevel,
            includeLocation,
            includeBattery
        );

        addPersonalMessage("");

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
            alert("Du avbröt SMS-utskick");
            setTimeout(() => {
                navigation.navigate("Hem");
            }, 500);
        }
    }

    return (
        <View style={styles.root}>
            <Image source={KofaLogo} style={styles.logo}></Image>

            <CountdownTimer
                handleTimerFinished={handleTimerFinished}
                onStop={() => navigation.replace("EndTimerScreen")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        height: "100%",
        marginHorizontal: 30,
    },
    logo: {
        width: 110,
        height: 70,
        marginTop: -20,
        alignSelf: "flex-end",
    },
});

export default TimerScreen;
