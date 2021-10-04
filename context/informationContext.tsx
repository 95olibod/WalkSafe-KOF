import { createContext, FC, useContext, useState } from "react";

export interface ActiveInfo {
    locationComponent: boolean;
    batteri: boolean;
}

interface ContextValue {
    activeList: ActiveInfo[];
    toggleLocationSwitch: () => void;
    toggleBatteriSwitch: () => void;
}

export const InformationContext = createContext<ContextValue>({toggleLocationSwitch: () => {}, toggleBatteriSwitch: () => {}, activeList: []});

const InformationProvider: FC = ({ children }) => {

    const [addLocation, setAddLocation] = useState(false);
    const [addBatteri, setAddBatteri] = useState(false);

    const toggleLocationSwitch = () => setAddLocation(previousState => !previousState);
    const toggleBatteriSwitch = () => setAddBatteri(previousState => !previousState);

    return (
        <InformationContext.Provider
            value={{
                toggleLocationSwitch,
                toggleBatteriSwitch,
                activeList: []
            }}
        >
            {children}
        </InformationContext.Provider>
    )
}

export const useInformation = () => useContext(InformationContext);
export default InformationProvider;