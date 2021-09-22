import React from "react";
import { Button, View, StyleSheet } from "react-native";

function HomePage() {
  return (
    <View style={styles.container}>
      <Button title="PRESS ME" onPress={() => alert("HJÄLP")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
});

export default HomePage;
