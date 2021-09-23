import React, { Component, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import moment from "moment";

interface Props {
  minutesToCountDown: number;
}

function CountdownTimer({ minutesToCountDown }: Props) {
  let [isTimerPaused, setTimer] = useState(false);

  const pauseTimer = () => {
    isTimerPaused = (true);
    setTimer(isTimerPaused);
  };

  // const pauseTimer= () => {

  // }

  if (minutesToCountDown > 60) {
    return (
      <View style={styles.timerView}>
        <CountDown
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20,
          }}
          until={60 * minutesToCountDown}
          size={30}
          onFinish={() => alert("Finished")}
          digitStyle={styles.bla}
          digitTxtStyle={{ color: "white" }}
          timeToShow={["H", "M", "S"]}
          timeLabels={{ h: "", m: "", s: "" }}
          onPress={pauseTimer}
          running={false}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.timerView}>
        <CountDown
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginTop: 20,
          }}
          until={60 * minutesToCountDown}
          size={30}
          onFinish={() => alert("tiden är ute och du har inte stoppat tiden, sms om hjälp skickas nu till dina valda kontakter")}
          digitStyle={styles.bla}
          digitTxtStyle={{ color: "white" }}
          timeToShow={["M", "S"]}
          timeLabels={{ m: "", s: "" }}
          onPress={pauseTimer}
          running={false}
        />
        <Text>Pausa timer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2D9BF0",
    width: 220,
    height: 220,
    borderRadius: 1000,
    opacity: 0.8,
  },
  timer: {
    borderRadius: 200,
  },
  bla: {
    width: 50,
    alignContent: "center",
    height: 50,
    opacity: 0.9,
    backgroundColor: "rgba(128, 128, 128, 0)",
  },
});

export default CountdownTimer;
