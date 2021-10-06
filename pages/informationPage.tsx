import React from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import InformationSwitches from "../components/informationSwitches"
import SmsInputValidation from "../components/smsInputValidation";

interface Props {
    onGoBack: () => void;
    onSetPage: (page: string) => void;
}

const InformationPage = ({onGoBack, onSetPage}: Props) => {

    return(
        <SafeAreaView style={style.container}>
            <View>
                <Text style={style.textstyle}>INFORMATION page</Text>
                {/* <Button title="Gå tillbaka hem" onPress={onGoBack}></Button> */}
                <Button
                title="gå tillbaka till contacts"
                onPress={() => onSetPage("contacts")}
            ></Button>
                <Text style={style.textstyle}>Inkludera i SMS utsick</Text>
                <InformationSwitches/>
                <SmsInputValidation/>
                <Button
                title="gå till timer"
                onPress={() => onSetPage("timer")}
            ></Button>
            </View>
        </SafeAreaView>
    )
}
  
export default InformationPage;

const style = StyleSheet.create ({
    container: {
        height: "100%",
        alignItems: 'center',
    },
    textstyle: {
        color: "white",
        margin: 10,
        fontSize: 15,
        alignSelf: 'center',
    },
});

