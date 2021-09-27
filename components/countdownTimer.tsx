// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from "react-native";

//importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

const CountdownTimer = () => {
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(5 * 1000);
    const [resetTimer, setResetTimer] = useState(false);

    //   const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    //   const [resetStopwatch, setResetStopwatch] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Välj tid för ankomst</Text>

                <View style={styles.sectionStyle}>
                    <Timer
                        totalDuration={timerDuration}
                        msecs2
                        //Time Duration
                        start={isTimerStart}
                        //To start
                        reset={resetTimer}
                        //To reset
                        options={options}
                        //options for the styling
                        handleFinish={() => {
                            alert("Nu är timer färdig");
                        }}
                        //can call a function On finish of the time
                        // getTime={(time) => {
                            //   console.log(time);
                            // }}
                 
                            />
                    <TouchableHighlight
                        style={styles.margin}
                        onPress={() => {
                            setIsTimerStart(!isTimerStart);
                            setResetTimer(false);
                        }}
                        >
                        <Text style={[styles.buttonText, styles.margin]}>
                            {!isTimerStart ? "START" : "PAUS"}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            setIsTimerStart(false);
                            setResetTimer(true);
                        }}
                    >
                        <Text style={styles.buttonText}>STOPP</Text>
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
        alignItems: "center",
        marginTop: 30,
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        padding: 20,
    },
    sectionStyle: {
        flex: 1,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 20,
        marginTop: 5,
        padding: 15,
        borderRadius: 5,
        color: "#FFF",
        backgroundColor: "rgba(45, 155, 240, 0.8)",
        // backgroundColor: "blue",
    },
    margin: {
        marginBottom: 10,
    },
});

const options = {
    container: {
        // backgroundColor: "#2D9BF0",
        backgroundColor: "rgba(45, 155, 240, 0.8)",
        padding: 5,
        borderRadius: 200,
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        fontSize: 40,
        color: "#FFF",
        // marginLeft: 7,
    },
};
