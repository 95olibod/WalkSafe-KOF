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
    clearPersonalMessage: () => void;
    includeLocation: boolean;
    includeBattery: boolean;
    schedulePushNotification: () => void;
}

export const InformationContext = createContext<ContextValue>({
  toggleLocationSwitch: () => {},
  toggleBatterySwitch: () => {},
  addPersonalMessage: () => {},
  clearPersonalMessage: () => {},
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
  //Defines states
  const [includeLocation, setIncludeLocation] = useState(false);
  const [includeBattery, setIncludeBattery] = useState(false);
  const [personalMessage, setPersonalMessage] = useState<string>("");

  const [expoPushToken, setExpoPushToken] = useState<string>("");
  const [notification, setNotification] = useState<any>(false);
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  //Sets switches to new state
  const toggleLocationSwitch = () =>
    setIncludeLocation((previousState) => !previousState);
  const toggleBatterySwitch = () =>
    setIncludeBattery((previousState) => !previousState);

  //Personal message for SMS
  const addPersonalMessage = (text: string) => {
    setPersonalMessage(text);
  };
  const clearPersonalMessage = () => {
    setPersonalMessage("");
  };

  useEffect(() => {
    (async () => {
      registerForPushNotificationsAsync().then((token: string) =>
        setExpoPushToken(token)
      );

      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      return () => {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    })();
  }, []);

  //Notifies user that message has been sent
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

  //function for getting users permission to access notifications
  const registerForPushNotificationsAsync = async () => {
    let token: string = "";

    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return "fail";
      }
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
  };

  return (
    <InformationContext.Provider
      value={{
        toggleLocationSwitch,
        toggleBatterySwitch,
        addPersonalMessage,
        clearPersonalMessage,
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
