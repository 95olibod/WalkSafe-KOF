import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import CountdownTimer from "../components/countdownTimer";

interface Props {
  onSetPage: (page: string) => void;
}

function HomePage({ onSetPage }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>HOME PAGE</Text>
        <Button
          title="Klicka för hjälp"
          onPress={() => alert("HJÄLP")}
        ></Button>
        <Button
          title="GÅ vidare till kontakter"
          onPress={() => onSetPage("contacts")}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default HomePage;
