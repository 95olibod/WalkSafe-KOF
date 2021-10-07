import React, { useContext, useState } from "react";
import {
    Button,
    View,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
} from "react-native";
import Battery, { DeviceContext } from "../context/deviceContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import TimerInput from "../components/timerInput";
import KofaLogo from "../public/images/logoWalkSafe.png";

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
            setTimerInputFromUser(totalMinutes * 60);
            navigation.navigate("Kontakter");
        }
    };

    return (
        <View style={styles.root}>
            <View style={styles.viewContainer}>
                <Image source={KofaLogo} style={styles.logo}></Image>

                {totalMinutes < 1 ? (
                    <Text style={styles.validationText}>
                        Timer måste minst ställas in på 1 minut
                    </Text>
                ) : null}

                <TimerInput
                    updateHours={updateHours}
                    updateMinutes={updateMinutes}
                />
            </View>
            <View>
                {totalMinutes > 0 ? (
                    <TouchableHighlight
                        style={[styles.button]}
                        onPress={() => handlePress()}
                    >
                        <Text style={[styles.buttonText]}>Gå vidare</Text>
                    </TouchableHighlight>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginHorizontal: 30,
        height: "100%",
        justifyContent: "space-between",
    },
    viewContainer: {
        alignItems: "center",
    },
    text: {
        color: "white",
    },
    validationText: {
        color: "#FFF",
        fontSize: 15,
    },
    button: {
        width: "100%",
        backgroundColor: "rgba(45, 155, 240, 0.4)",
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "300",
        color: "#fff",
        textAlign: "center",
    },
    logo: {
        width: 230,
        height: 150,
        marginTop: -40,
        alignSelf: "center",
    },
});

export default HomeScreen;
