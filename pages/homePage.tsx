import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import CountdownTimer from "../components/countdownTimer";

interface Props {
    onSetPage: (page: string) => void;
}

function HomePage({ onSetPage }: Props) {
    return (
        <View style={styles.container}>
          <Text>HOME PAGE</Text>
            <Button title="HOMEPAGE BUTTON" onPress={() => alert("HJÄLP")}></Button>
            <Button
                title="GÅ vidare till kontakter"
                onPress={() => onSetPage("contacts")}
            ></Button>

            {/* <CountdownTimer /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        height: "100%",
    },
});

export default HomePage;
