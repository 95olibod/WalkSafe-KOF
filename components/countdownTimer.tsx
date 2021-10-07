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
  handleTimerFinished: () => void;
  onStop: () => void;
}

const CountdownTimer = ({ onStop, handleTimerFinished }: Props) => {
        
  // get props from context 

  const { timerInput } = useContext(DeviceContext);

  // Hooks that holds state for if the timer is running & resets timers minutes

  const [isTimerStart, setIsTimerStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  
  // Set timerinput to minutes

  const timerDuration = timerInput * 1000;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
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
      </View>
      {isTimerStart === true ?

        <TouchableHighlight
        style={[styles.button]}
        onPress={ () => {
          setResetTimer(true)
          setIsTimerStart(!isTimerStart)
          setTimeout(() => {
            onStop();
          }, 500);
        }}
        >
        <Text style={styles.buttonText}>Stoppa Timer</Text>
      </TouchableHighlight>
    : null  
    }
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
  },
  pauseButton: {
    color: "#FFFF",
    backgroundColor: "rgba(45, 155, 240, 0.4)",
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
  },
  pauseButtonText: {
    color: "#FFF",
  },
  button: {
    width: "100%",
    backgroundColor: "rgba(45, 155, 240, 0.4)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
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
