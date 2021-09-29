import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CountdownTimer from "../components/countdownTimer";

interface Props {
    onSetPage: (page: string) => void;
}

function TimerPage({ onSetPage }: Props) {
    return (
        <View style={styles.container}>
            <CountdownTimer onSetPage={() => onSetPage("endPage")} />
        </View>
    );
}

const styles = StyleSheet.create({
      container: {         
          height: "100%",
      },
  });

export default TimerPage;
