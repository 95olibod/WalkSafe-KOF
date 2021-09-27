import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CountdownTimer from "../components/countdownTimer";

interface Props {
    onSetPage: (page: string) => void;
}

function TimerPage({ onSetPage }: Props) {
    return (
        <View style={styles.container}>
            <Text>TIMER PAGE</Text>
            <CountdownTimer onSetPage={() => onSetPage("timer")} />
        </View>
    );
}

const styles = StyleSheet.create({
      container: {         
          height: "100%",
      },
  });

export default TimerPage;
