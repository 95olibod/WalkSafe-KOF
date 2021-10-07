import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default function Notification() {
    const [expoPushToken, setExpoPushToken] = useState<string>("");
    const [notification, setNotification] = useState<any>(false);
    const notificationListener = useRef<any>();
    const responseListener = useRef<any>();

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

    return (
        <View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text>
                    Title: {notification && notification.request.content.title}{" "}
                </Text>
                <Text>
                    Body: {notification && notification.request.content.body}
                </Text>
                <Text>
                    Data:{" "}
                    {notification &&
                        JSON.stringify(notification.request.content.data)}
                </Text>
            </View>
            <Button
                title="Press to schedule a notification"
                onPress={async () => {
                    await schedulePushNotification();
                }}
            />
        </View>
    );
}

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "🚨 Din Walk Safe timer har gått ut 🚨",
            body: "Nödanrop skickas nu till dina valda kontakter 📲",
            data: { data: "goes here" },
        },
        trigger: { seconds: 2 },
    });
}

async function registerForPushNotificationsAsync() {
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
