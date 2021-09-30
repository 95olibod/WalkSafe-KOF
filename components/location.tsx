import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Location from "expo-location";

function LocationFunc() {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const unixTime = 1632992955;
      const date = new Date(unixTime * 1000);

      //DATA TO ARDI
      const phoneLocation = {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        timestamp: date.toString(),
      };

      setLocation(phoneLocation);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}

export default LocationFunc;
