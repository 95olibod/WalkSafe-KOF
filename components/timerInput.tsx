import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import NumericInput from 'react-native-numeric-input'

function TimerInput () {

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

    //TODO: VIDARE TILL CONTEXT
    const [totalMinutes, setTotalMinutes] = useState(0);
    
    return (
        <View style={styles.timerInput}>
            {/* <Text>SKRIV IN RUBRIK</Text> */}
            <View style={styles.box}>
                <Text style={styles.text}>Timmar</Text>
                <NumericInput type='up-down' value={hours} minValue={0} maxValue={100} onChange={(hour) => UpdateHours(hour)} textColor="white"  />
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Minuter</Text>
                <NumericInput type='up-down' value={minutes} minValue={0} maxValue={59} onChange={(minutes) => UpdateMinutes(minutes)} textColor="white"  />
            </View>
        </View>
    )
}

export default TimerInput;


const styles = StyleSheet.create({
    timerInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // width: "100%",
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
        margin: 20
        // marginBottom: 20
    },
})