// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, { useState } from "react";
// import all the components we are going to use
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
//importing library to use Stopwatch and Timer
import { Timer } from "react-native-stopwatch-timer";

//Importing library to use SMS
import * as SMS from 'expo-sms';

interface Props {
    onSetPage: (page: string) => void;
}

async function CheckSmsAvailability(){
    const isAvailable : boolean = await SMS.isAvailableAsync();
    if (isAvailable){
        // do your SMS stuff here
        
        SendSms();
        return "Message sent";
    }
    else {
        // misfortune... there's no SMS available on this device
        return "Unable to send message";
    }
}

// List containing Recipients of alarm message
const recipientsList = ["hej", "bla"];

// Message to sent to recipientList (should be chonst)
let messageToSend : string;

async function SendSms(){
    const { result } = await SMS.sendSMSAsync(
        recipientsList,
        messageToSend,
        // ['0733660216', '0704765941'],
        // 'Testmeddelande från appen...',
    )
}

const CountdownTimer = ({ onSetPage }: Props) => {
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(3 * 1000);
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
                            CheckSmsAvailability();
                            alert("message sent...");
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
                            onSetPage("endPage");
                        }}
                    >
                        <Text
                            style={styles.buttonText}
                            //   onPress={() => onSetPage("endPage")}
                        >
                            STOPP
                        </Text>
                    </TouchableHighlight>
                    {/* <Button title="GÅ HEM" onPress={() => onSetPage("home")}>
                        STOPP
                    </Button> */}
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
