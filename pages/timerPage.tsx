import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import CountdownTimer from "../components/countdownTimer";
import StopTimerButton from "../components/stopTimerButton";
// import { TimerContext } from "../context/timerContext";


interface Props {
    onSetMinutes: (nr: number) => void;
}
function TimerPage ({ onSetMinutes }: Props) {

    let [timer, setTimer] = useState(42);

    function toggleTimerButton (){
        timer = 0;
        setTimer(timer);
    }

    // const {
    //     startTimer, 
    //     stopTimer
    // }= useContext(TimerContext)


    return(
        <View style={styles.timer}>
            <Text style={styles.text} onPress={toggleTimerButton}>timer</Text>
            <CountdownTimer minutesToCountDown={timer}/>
            <StopTimerButton onStopTimer={toggleTimerButton}/>
        </View>
    );
}

const styles = StyleSheet.create({  
      text:{
        color: "white",
        backgroundColor:"red", 
        borderRadius: 200
    },
      timer:{
          justifyContent: "center",
          alignItems: "center",
    }
    });

export default TimerPage;