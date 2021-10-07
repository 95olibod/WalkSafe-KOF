import React, { createContext, FC, useContext, useState } from "react";

interface ContextValue {
    personalMessage: string;
    toggleLocationSwitch: () => void;
    toggleBatterySwitch: () => void;
    addPersonalMessage: (text: string) => void;
    includeLocation: boolean;
    includeBattery: boolean;
}

export const InformationContext = createContext<ContextValue>({
    toggleLocationSwitch: () => {},
    toggleBatterySwitch: () => {},
    addPersonalMessage: () => {},
    personalMessage: "",
    includeLocation: false,
    includeBattery: false,
});

const InformationProvider: FC = ({ children }) => {
    const [includeLocation, setIncludeLocation] = useState(false);
    const [includeBattery, setIncludeBattery] = useState(false);
    const [personalMessage, setPersonalMessage] = useState<string>("");

    const toggleLocationSwitch = () =>
        setIncludeLocation((previousState) => !previousState);
    const toggleBatterySwitch = () =>
        setIncludeBattery((previousState) => !previousState);

    const addPersonalMessage = (text: string) => {
        setPersonalMessage(text);
    };

    return (
        <InformationContext.Provider
            value={{
                toggleLocationSwitch,
                toggleBatterySwitch,
                addPersonalMessage,
                personalMessage,
                includeBattery,
                includeLocation,
            }}
        >
            {children}
        </InformationContext.Provider>
    );
};
export default InformationProvider;
