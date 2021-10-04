import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import InformationSwitches from "../components/informationSwitches"

interface Props {
    onGoBack: () => void;
    onSetPage: (page: string) => void;
}

const InformationPage = ({onGoBack, onSetPage}: Props) => {

    return(
        <SafeAreaView style={style.container}>
        <View>
                <Text>INFORMATION page</Text>
                {/* <Button title="Gå tillbaka hem" onPress={onGoBack}></Button> */}
                <Button
                title="gå tillbaka till contacts"
                onPress={() => onSetPage("contacts")}
            ></Button>
                <Button
                title="gå till timer"
                onPress={() => onSetPage("timer")}
            ></Button>
                <Text style={style.textstyle}>Välj vilken information som ska vara på meddelandet</Text>
                <InformationSwitches/>
        </View>
        </SafeAreaView>
    )
}
  
export default InformationPage;

const style = StyleSheet.create ({
    container: {
        height: "100%",
    },
    textstyle: {
        color: "white",
        margin: 10,
        fontSize: 15,
    },
});

