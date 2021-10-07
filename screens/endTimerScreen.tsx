import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { RootStackParamList } from "../navigators/rootStackNavigator";
import KofaLogo from "../public/images/logoWalkSafe.png";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

const EndTimerScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.root}>
      <Image source={KofaLogo} style={styles.logo}/>
      <View>
        <Text style={styles.title}>Tack för att du använder Walk Safe!</Text>
      </View>
      <View style={styles.textfield}>
        <Text style={styles.text}>
          Du har stoppat din timer, och vi hoppas att du har haft en säker
          promenad och kommit fram till din slutdestination
        </Text>
      </View>

      <View>
        <TouchableHighlight
          style={[styles.button]}
          onPress={() => navigation.navigate("Hem")}
        >
          <Text style={[styles.buttonText]}>Starta en ny säker promenad</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30,
    height: "100%",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontStyle: "italic",
    color: "white",
    fontWeight: "800",
    textAlign: "center",
  },
  textfield: {
    backgroundColor: "rgba(45, 155, 240, 0.1)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
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
  logo: {
    width: 110,
    height: 70,
    marginTop: -20,
    alignSelf: "flex-end",
  },
});

export default EndTimerScreen;
