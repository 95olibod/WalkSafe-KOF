import React, { useContext, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import { Timer } from "react-native-stopwatch-timer";
import { DeviceContext } from "../context/deviceContext";

interface Props {
    // onStart?: () => void; REMOVE?
    handleTimerFinished: () => void;
    onStop: () => void;
}

const CountdownTimer = ({ onStop, handleTimerFinished }: Props) => {

    const { timerInput } = useContext(DeviceContext);


    const [isTimerStart, setIsTimerStart] = useState(false);

    const timerDuration = ((timerInput * 60) * 1000);

    const [resetTimer, setResetTimer] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Timer
                        //Time Duration
                        totalDuration={timerDuration}
                        msecs2
                        //To start
                        start={isTimerStart}
                        //To reset
                        reset={resetTimer}
                        //options for the styling
                        options={options}
                        //if finished
                        handleFinish={() => {
                            handleTimerFinished();
                        }}
                    />
                    <TouchableHighlight
                        style={styles.pauseButton}
                        onPress={() => {
                            setIsTimerStart(!isTimerStart);
                            setResetTimer(false);
                        }}
                    >
                        <Text style={styles.pauseButtonText}>
                            {!isTimerStart ? "STARTA" : "PAUSA"}
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[styles.buttonText, styles.marginTop]}
                        onPress={() => {
                            setIsTimerStart(false);
                            setResetTimer(true);
                            onStop();
                        }}
                    >
                        <Text style={[styles.StopText]}>STOPPA TIMER</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CountdownTimer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        padding: 20,
    },
    sectionStyle: {
        flex: 1,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        marginTop: 5,
        padding: 15,
        borderRadius: 10,
        color: "#FFF",
        backgroundColor: "rgba(45, 155, 240, 0.4)",
        alignItems: "center",
        alignSelf: "center",
    },
    pauseButton: {
        color: "#FFFF",
        backgroundColor: "rgba(45, 155, 240, 0.4)",
        padding: 5,
        marginTop: 20,
        borderRadius: 10,
    },
    StopText: {
        fontSize: 38,
        color: "#FFF",
    },
    marginTop: {
        marginTop: 90,
    },
    pauseButtonText: {
        color: "#FFF",
    },
});

const options = {
    container: {
        backgroundColor: "rgba(45, 155, 240, 0.3)",
        padding: 5,
        borderRadius: 200,
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 1,
    },
    text: {
        fontSize: 40,
        color: "#FFF",
    },
};
