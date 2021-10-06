import * as Battery from "expo-battery";
import * as Device from "expo-device";
import * as Location from "expo-location";
import React, { createContext, FC, useEffect, useState } from "react";
import location from "../components/location";

interface ContextValue {
    batteryLevel: number;

    locationLongitude: number;
    locationLatitude: number;
    location: object;

    deviceName: string | undefined;
    deviceModel: string | undefined;

    userText: string | undefined;
    timerInput: number;

    setUserInputText: (text: string) => void;
    setTimerInputFromUser: (minutes: number) => void;
}

export const DeviceContext = createContext<ContextValue>({
    batteryLevel: 0,
    locationLongitude: 0,
    locationLatitude: 0,
    location: {},
    deviceName: "",
    deviceModel: "",
    userText: "",
    timerInput: 0,
    setUserInputText: () => {},
    setTimerInputFromUser: () => {},
});

const DeviceProvider: FC = ({ children }) => {
    const [batteryLevel, setBatteryLevel] = useState<number>(0);

    const [locationLongitude, setLocationLongitude] = useState<number>(0);
    const [locationLatitude, setLocationLatitude] = useState<number>(0);

    const [deviceName, setdeviceName] = useState<string>();
    const [deviceModel, setdeviceModel] = useState<string>();

    const [userText, setUserText] = useState<string>();
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
                return alert("Du har inte givit tillstånd till att spåra dig");
            }

            let phoneLocation = await Location.getLastKnownPositionAsync({});

            if (phoneLocation) {
                setLocationLongitude(phoneLocation.coords.longitude);
                setLocationLatitude(phoneLocation.coords.latitude);
            }
        })();
    }, []);

    // DEVICE INFO, NAME & MODEL
    useEffect(() => {
        (async () => {
            let nameOfDevice = await Device.deviceName;
            let nameOfModel = await Device.modelId;
            if (nameOfDevice === null) {
                nameOfDevice = "namn okänt";
            }
            if (!nameOfModel) {
                nameOfModel = "okänd enhet";
            }
            setdeviceName(nameOfDevice);
            setdeviceModel(nameOfModel);
        })();
    }, []);

    // USER TEXT
    const setUserInputText = (userMessage: string) => {
        setUserText(userMessage);
    };

    // TIMER INPUT
    const setTimerInputFromUser = (minutes: number) => {
        setTimerInput(minutes);
    };

    return (
        <DeviceContext.Provider
            value={{
                batteryLevel,
                locationLongitude,
                locationLatitude,
                location,
                deviceName,
                deviceModel,
                setUserInputText,
                userText,
                setTimerInputFromUser,
                timerInput,
            }}
        >
            {children}
        </DeviceContext.Provider>
    );
};
export default DeviceProvider;
