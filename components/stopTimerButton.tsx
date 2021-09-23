import { Button, StyleSheet } from "react-native";
import React from "react";

interface Props {
    onStopTimer: () => void;
}


function StopTimerButton ({onStopTimer}: Props) {
    return (
        <Button color="red" title="stoppa timer" onPress={onStopTimer}></Button>
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


export default StopTimerButton;