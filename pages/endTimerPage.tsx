import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

interface Props {
  onSetPage: (page: string) => void;
}

const EndTimerPage = ({ onSetPage }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textfield}>
        <Text style={styles.text}>Du har stoppat din timer, och vi hoppas att du har haft en säker promenad och kommit fram till din slutdestination</Text>
      </View>
      <Button title="Starta ny säker promenad" onPress={() => onSetPage("home")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 30,
  },
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textfield: {
      justifyContent: "center",
      alignItems: "center",
      

  },
});

export default EndTimerPage;
