import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import * as Battery from "expo-battery";
import { View } from "react-native";
import * as Location from "expo-location";
import * as Device from "expo-device";

interface ContextValue {
  batteryLevel: number;
  locationLongitude: number;
  locationLatitude: number;
  deviceName: string | undefined;
  deviceModel: string | undefined;
  //   userText: string;
  setTimerInputFromUser: (minutes: number) => void;
  timerInput: number;

  //   timestamp: string;
}

export const DeviceContext = createContext<ContextValue>({
  batteryLevel: 0,
  locationLongitude: 0,
  locationLatitude: 0,
  deviceName: "",
  deviceModel: "",
  //   userText: "",
  setTimerInputFromUser: () => {},
  timerInput: 0,
});

const DeviceProvider: FC = ({ children }) => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);
  const [locationLongitude, setLocationLongitude] = useState<number>(0);
  const [locationLatitude, setLocationLatitude] = useState<number>(0);
  const [LocationErrorMsg, setLocationErrorMsg] = useState<string>(""); // ska vi ha med?
  const [deviceName, setdeviceName] = useState<string>();
  const [deviceModel, setdeviceModel] = useState<string>();
  //   const [userText, setUserText] = useState<string>();
  const [timerInput, setTimerInput] = useState<number>(0);

  // BATTERY

  useEffect(() => {
    const batteryLevelOnMobile = async () => {
      const batteryTime = await Battery.getBatteryLevelAsync();
      setBatteryLevel(Math.round(batteryTime * 100));
    };
    batteryLevelOnMobile();
  }, []);

  // LOCATION

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocationErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      setLocationLongitude(location.coords.longitude);
      setLocationLatitude(location.coords.latitude);
    })();
  }, []);

  // DEVICE INFO, NAME & MODEL

  useEffect(() => {
    (async () => {
      let nameOfDevice = await Device.deviceName;
      let nameOfModel: string = await Device.modelId;
      if (nameOfDevice === null) {
        nameOfDevice = "namn okänt";
      }
      if (!nameOfModel) {
        nameOfModel = "okänd enhet";
      }
      setdeviceName(nameOfDevice);
      setdeviceModel(nameOfDevice);
    })();
  }, []);

  // USER TEXT

  //   const setUserInputText = (userMessage: string) => {
  //       setUserText(userMessage);
  //   };

  // TIMER INPUT

  const  setTimerInputFromUser = (minutes: number) => {
     setTimerInput(minutes);
  };

  //

  return (
    <DeviceContext.Provider
      value={{
        batteryLevel,
        locationLongitude,
        locationLatitude,
        deviceName,
        deviceModel,
        // userText,
        setTimerInputFromUser,
        timerInput
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
export default DeviceProvider;
