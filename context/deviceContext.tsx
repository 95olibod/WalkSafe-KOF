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

interface ContextValue {
  batteryLevel: number;
  //   locationLatitude: string;
  //   locationLongitude: string;
  //   timestamp: string;
}

export const DeviceContext = createContext<ContextValue>({
 
  batteryLevel: 0,
});

const DeviceProvider: FC = ({ children }) => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);

  // BATTERY

  useEffect(() => {
    const batteryLevelOnMobile = async () => {
      const batteryTime = await Battery.getBatteryLevelAsync();
      setBatteryLevel(Math.round(batteryTime * 100));
    };
    batteryLevelOnMobile();
  }, []);

  // LOCATION - flytta från location.tsx

  // USER TEXT

  // TIMER INPUT

  //

  return (
    <DeviceContext.Provider
      value={{
        batteryLevel,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
// export const useContacts = () => useContext(DeviceContext);
export default DeviceProvider;
