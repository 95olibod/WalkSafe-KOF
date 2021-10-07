import React, {
    createContext,
    FC,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Platform } from "react-native";

interface ContextValue {
    personalMessage: string;
    toggleLocationSwitch: () => void;
    toggleBatterySwitch: () => void;
    addPersonalMessage: (text: string) => void;
    includeLocation: boolean;
    includeBattery: boolean;
    schedulePushNotification: () => void;
}

export const InformationContext = createContext<ContextValue>({
    toggleLocationSwitch: () => {},
    toggleBatterySwitch: () => {},
    addPersonalMessage: () => {},
    personalMessage: "",
    includeLocation: false,
    includeBattery: false,
    schedulePushNotification: () => {},
});

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const InformationProvider: FC = ({ children }) => {
    const [includeLocation, setIncludeLocation] = useState(false);
    const [includeBattery, setIncludeBattery] = useState(false);
    const [personalMessage, setPersonalMessage] = useState<string>("");

    const [expoPushToken, setExpoPushToken] = useState<string>("");
    const [notification, setNotification] = useState<any>(false);
    const notificationListener = useRef<any>();
    const responseListener = useRef<any>();

    const toggleLocationSwitch = () =>
        setIncludeLocation((previousState) => !previousState);
    const toggleBatterySwitch = () =>
        setIncludeBattery((previousState) => !previousState);

    const addPersonalMessage = (text: string) => {
        setPersonalMessage(text);
    };

    useEffect(() => {
        (async () => {
            registerForPushNotificationsAsync().then((token: string) =>
                setExpoPushToken(token)
            );

            notificationListener.current =
                Notifications.addNotificationReceivedListener(
                    (notification) => {
                        setNotification(notification);
                    }
                );

            responseListener.current =
                Notifications.addNotificationResponseReceivedListener(
                    (response) => {
                        console.log(response);
                    }
                );

            return () => {
                Notifications.removeNotificationSubscription(
                    notificationListener.current
                );
                Notifications.removeNotificationSubscription(
                    responseListener.current
                );
            };
        })();
    }, []);

    const schedulePushNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "🚨 Din Walk Safe timer har gått ut 🚨",
                body: "Nödanrop skickas nu till dina valda kontakter 📲",
                data: { data: "goes here" },
            },
            trigger: { seconds: 2 },
        });
    };

    async function registerForPushNotificationsAsync() {
        let token: string = "";

        if (Constants.isDevice) {
            const { status: existingStatus } =
                await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;

            if (existingStatus !== "granted") {
                const { status } =
                    await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== "granted") {
                alert("Failed to get push token for push notification!");
                return "fail";
            }
        } else {
            // alert("Must use physical device for Push Notifications");
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;

        if (Platform.OS === "android") {
            Notifications.setNotificationChannelAsync("default", {
                name: "default",
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: "#FF231F7C",
            });
        }
        return token;
    }

    return (
        <InformationContext.Provider
            value={{
                toggleLocationSwitch,
                toggleBatterySwitch,
                addPersonalMessage,
                schedulePushNotification,
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
