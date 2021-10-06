import React, { useContext, useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import CountdownTimer from "../components/countdownTimer";
import LocationFunc from "../components/location";
import Battery, { DeviceContext } from "../context/deviceContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import TimerInput from "../components/timerInput";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

function HomeScreen({ navigation }: Props) {
    const { setTimerInputFromUser } = useContext(DeviceContext);

    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState(0);

    const updateHours = (hours: number) => {
        setHours(hours);
        setTotalMinutes(minutes + hours * 60);
    };

    const updateMinutes = (minutes: number) => {
        setMinutes(minutes);
        setTotalMinutes(minutes + hours * 60);
    };

    const handlePress = () => {
        if (totalMinutes >= 1) {
            setTimerInputFromUser(totalMinutes);
            // setTimerInputFromUser(totalMinutes * 60);
            navigation.navigate("Kontakter");
        }
    };

    return (
        <View style={styles.container}>
            {totalMinutes < 1 ? (
                <Text style={styles.validationText}>
                    Timer måste minst ställas in på 1 minut
                </Text>
            ) : null}

            <TimerInput
                updateHours={updateHours}
                updateMinutes={updateMinutes}
            />

            {totalMinutes > 0 ? (
                <Button
                    title="GÅ vidare till kontakter"
                    onPress={() => handlePress()}
                ></Button>
            ) : null}

            <Battery />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
    },
    text: {
        color: "white",
    },
    validationText: {
        color: "#FFF",
        fontSize: 15,
    },
});

export default HomeScreen;
