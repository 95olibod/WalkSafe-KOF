import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import NumericInput from 'react-native-numeric-input'


function UpdateHours (hours: number) {
    setHours(hours)
    setTotalMinutes(minutes + (hours * 60))
}

function UpdateMinutes (minutes : number) {
    setMinutes(minutes)
    setTotalMinutes(minutes + (hours * 60))
}

const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);
const [totalMinutes, setTotalMinutes] = useState(0);



function TimerInput () {
    return (
        <View style={styles.timerInput}>
            <View style={styles.box}>
                <Text style={styles.text}>Timmar</Text>
                <NumericInput type='up-down' value={hours} onChange={(x) => UpdateHours(x)} textColor="white"  />
            </View>
            <View>
                <Text style={styles.text}>Minuter</Text>
                <NumericInput type='up-down' value={minutes} onChange={(y) => UpdateMinutes(y)} textColor="white"  />
            </View>
        </View>
    )
}

export default TimerInput;


const styles = StyleSheet.create({
    timerInput: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        // backgroundColor: "white",
        color: "white",
    },
    
    
    text: {
        color: "white",
    },
    minutes: {
        color: "white",
    },
    box: {
        marginRight: 20
    },
})