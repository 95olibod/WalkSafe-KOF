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

  // const timerDuration = ((timerInput * 60) * 1000);
  const timerDuration = timerInput * 1000;

  const [resetTimer, setResetTimer] = useState(false);

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
      <TouchableHighlight
        style={[styles.button]}
        onPress={() => {
          setIsTimerStart(false);
          setResetTimer(true);
          onStop();
        }}
      >
        <Text style={styles.buttonText}>Stoppa Timer</Text>
      </TouchableHighlight>
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
