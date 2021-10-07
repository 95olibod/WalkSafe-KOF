import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NumericInput from "react-native-numeric-input";

interface Props {
  updateMinutes: (minutes :number) => void;
  updateHours: (hours :number) => void;
}

function TimerInput({updateMinutes, updateHours}: Props) {
  return (
    <View style={styles.root}>
      <View style={styles.timerInput}>
        <View style={styles.box}>
          <Text style={styles.text}>Timmar</Text>
          <NumericInput
            type="up-down"
            minValue={0}
            maxValue={100}
            onChange={(hour: number) => updateHours(hour)}
            textColor="white"
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Minuter</Text>
          <NumericInput
            type="up-down"
            minValue={0}
            maxValue={59}
            onChange={(minutes: number) => updateMinutes(minutes)}
            textColor="white"
          />
        </View>
      </View>    
    </View>
  );
}

export default TimerInput;

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
    
    },
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
    margin: 20,
    // marginBottom: 20
  },
  
});
