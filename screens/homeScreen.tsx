import React, { useContext, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import { DeviceContext } from "../context/deviceContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/rootStackNavigator";
import TimerInput from "../components/timerInput";
import KofaLogo from "../public/images/logoWalkSafe.png";
import { InformationContext } from "../context/informationContext";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

const HomeScreen = ({ navigation }: Props) => {
  const { setTimerInputFromUser } = useContext(DeviceContext);
  const { clearPersonalMessage } = useContext(InformationContext);

  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);

  const updateHours = (hours: number) => {
    setHours(hours);
    setTotalMinutes(minutes + hours * 60);
  };

  const updateMinutes = (minutes: number) => {
    setMinutes(minutes);
    setTotalMinutes(minutes + hours * 60);
  };

  const handlePress = () => {
    if (totalMinutes >= 1) {
      setTimerInputFromUser(totalMinutes * 60);
      navigation.navigate("Kontakter");

      //Clear personal message
      clearPersonalMessage();
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.viewContainer}>
        <Image source={KofaLogo} style={styles.logo}/>
        <Text style={styles.title}>Ange maximal tid för din säkra promenad</Text>


        {totalMinutes < 1 ? (
          <Text style={styles.validationText}>
            Timer måste minst ställas in på 1 minut
          </Text>
        ) : null}

        <TimerInput updateHours={updateHours} updateMinutes={updateMinutes} />
      </View>
      <View>
        {totalMinutes > 0 ? (
          <TouchableHighlight
          style={[styles.button]}
          onPress={() => handlePress()}
          >
            <Text style={[styles.buttonText]}>Gå vidare</Text>
          </TouchableHighlight>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 30,
    height: "100%",
    justifyContent: "space-between",
  },
  viewContainer: {
    alignItems: "center",
  },
  validationText: {
    color: "#FFF",
    fontSize: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "rgba(45, 155, 240, 0.4)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
    textAlign: "center",
  },
  logo: {
    width: 230,
    height: 150,
    alignSelf: "center",
  },
  title: {
    color: "#fff",
    fontSize: 17,
    marginBottom: 8
  }
});

export default HomeScreen;
