import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import InformationSwitches from "../components/informationSwitches"
import SmsInputValidation from "../components/smsInputValidation";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

const InformationScreen = ({ navigation }: Props) => {

    return(
        <SafeAreaView style={style.container}>
                <Text style={style.textstyle}>INFORMATION page</Text>
                {/* <Button title="Gå tillbaka hem" onPress={onGoBack}></Button> */}
                {/* <Button
                title="gå tillbaka till contacts"
                onPress={() => onSetPage("contacts")}
            ></Button> */}
                <Text style={style.textstyle}>Inkludera i SMS utsick</Text>
                <InformationSwitches/>
                <SmsInputValidation/>
                <Button
                title="Sätt timer"
                onPress={() => navigation.navigate("Timer")}
            ></Button>
        </SafeAreaView>
    )
}
  
export default InformationScreen;

const style = StyleSheet.create ({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
    },
    textstyle: {
        color: "white",
        margin: 10,
        fontSize: 15,
        alignSelf: 'center',
    },
});
