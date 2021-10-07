import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { StyleSheet, Image, View } from "react-native";
import CountdownTimer from "../components/countdownTimer";
import { SendSms } from "../functions/smsSender";
import { useContacts } from "../context/contactContext";
import { DeviceContext } from "../context/deviceContext";
import { InformationContext } from "../context/informationContext";
import { RootStackParamList } from "../navigators/rootStackNavigator";
import KofaLogo from "../public/images/logoWalkSafe.png";

type Props = NativeStackScreenProps<RootStackParamList, "Timer">;

function TimerScreen({ navigation }: Props) {
  const {
    batteryLevel,
    locationLongitude,
    locationLatitude,
    deviceName,
    deviceModel,
  } = useContext(DeviceContext);

  const {
    includeLocation,
    includeBattery,
    personalMessage,
    addPersonalMessage,
    schedulePushNotification,
  } = useContext(InformationContext);

  const { favouriteContacts } = useContacts();

  async function handleTimerFinished() {
    const favoritNumbers = favouriteContacts.map(
      (contact) => contact.phoneNumber
    );

    const result = await SendSms(
      favoritNumbers,
      deviceName,
      deviceModel,
      locationLongitude,
      locationLatitude,
      personalMessage,
      batteryLevel,
      includeLocation,
      includeBattery
    );

    if (result === "sent") {
      //Navigate to home screen
      navigation.navigate("Hem");
     //Notifies user SMS has been sent to favourite contacts 
      schedulePushNotification();
    } else if (result === "unknown") {     
      setTimeout(() => {
        navigation.navigate("Hem");
        schedulePushNotification();
      }, 500);
    }
    // If user cancelled / Unavaliable SMS
    else {
      alert("Du avbröt SMS-utskick");
      setTimeout(() => {
        navigation.navigate("Hem");
      }, 500);
    }
    addPersonalMessage("");
  }

  return (
    <View style={styles.root}>
      <Image source={KofaLogo} style={styles.logo}/>
      <CountdownTimer
        handleTimerFinished={handleTimerFinished}
        onStop={() => navigation.replace("EndTimerScreen")}
      />
    </View>
  );
}

export default TimerScreen;

const styles = StyleSheet.create({
  root: {
    height: "100%",
    marginHorizontal: 30,
  },
  logo: {
    width: 110,
    height: 70,
    marginTop: -20,
    alignSelf: "flex-end",
  },
});