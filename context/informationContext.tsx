import React, { createContext, FC, useContext, useState } from "react";

export interface ActiveInfo {
    locationComponent: boolean;
    battery: boolean;
}

interface ContextValue {
    activeList: ActiveInfo[];
    toggleLocationSwitch: () => void;
    toggleBatterySwitch: () => void;
    includeLocation: boolean;
    includeBattery: boolean
}

export const InformationContext = createContext<ContextValue>({
    toggleLocationSwitch: () => {}, 
    toggleBatterySwitch: () => {}, 
    activeList: [],
    includeLocation: false,
    includeBattery: false
});

const InformationProvider: FC = ({ children }) => {

    const [includeLocation, setIncludeLocation] = useState(false);
    const [includeBattery, setIncludeBattery] = useState(false);

    const toggleLocationSwitch = () => setIncludeLocation(previousState => !previousState);
    const toggleBatteriSwitch = () => setIncludeBattery(previousState => !previousState);

    return (
        <InformationContext.Provider
            value={{
                toggleLocationSwitch,
                toggleBatterySwitch: toggleBatteriSwitch,
                activeList: [],
                includeBattery: includeBattery,
                includeLocation

            }}
        >
            {children}
        </InformationContext.Provider>
    )
}
export default InformationProvider;