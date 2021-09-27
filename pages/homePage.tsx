import React from "react";
import { Button, View, StyleSheet } from "react-native";
import CountdownTimer from "../components/countdownTimer"

function HomePage() {
  return (
    <View style={styles.container}>
      <Button title="PRESS ME" onPress={() => alert("HJÄLP")}></Button>
      <CountdownTimer/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: "100%"
  },
});

export default HomePage;
