import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import CountdownTimer from "../components/countdownTimer";
import LocationFunc from "../components/location";
import Battery from "../components/battery";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";

// interface Props {
//   onSetPage: (page: string) => void;
// }

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

function HomePage({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>HOME PAGE</Text>
                <Button
                    title="Klicka för hjälp"
                    onPress={() => alert("HJÄLP")}
                ></Button>
                <Button
                    title="GÅ vidare till kontakter"
                    onPress={() => navigation.navigate("Kontakter")}
                ></Button>
                <Battery />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
    },
    text: {
        color: "white",
    },
});

export default HomePage;
