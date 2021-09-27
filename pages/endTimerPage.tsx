import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

interface Props {
    onSetPage: (page: string) => void;
}

const EndTimerPage = ({ onSetPage }: Props) => {
    return (
        <View>
            <Text style={styles.text}>EndPage</Text>
            <Text style={styles.text}>Här ska fin text stå</Text>

            <Button title="Gå hem" onPress={() => onSetPage("home")}></Button>
        </View>
    );
};

const styles = StyleSheet.create({ 
    text:{
        color: "white"
    }
});


export default EndTimerPage;
