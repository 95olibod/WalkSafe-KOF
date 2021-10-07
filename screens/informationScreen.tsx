import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, Button, StyleSheet, TouchableHighlight } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import InformationSwitches from "../components/informationSwitches"
import SmsInputValidation from "../components/smsInputValidation";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

const InformationScreen = ({ navigation }: Props) => {

    return(
        <SafeAreaView style={styles.root}>
            <Text style={styles.textstyle}>Inkludera i SMS utsick</Text>
            <InformationSwitches/>
            <SmsInputValidation/>
            {/* <Button
                title="Sätt timer"
                onPress={() => navigation.navigate("Timer")}
            ></Button> */}
            <TouchableHighlight
          style={[styles.button]}
          onPress={() => navigation.navigate("Timer")}
        >
          <Text style={[styles.buttonText]}>Gå vidare</Text>
        </TouchableHighlight>
        </SafeAreaView>
    )
}
  
export default InformationScreen;

const styles = StyleSheet.create ({
    root: {
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 30,
    },
    textstyle: {
        color: "white",
        margin: 10,
        fontSize: 15,
        alignSelf: "center",
    },
    button: {
        width: "100%",
        backgroundColor: "rgba(45, 155, 240, 0.4)",
        padding: 20,
        borderRadius:10,
        marginBottom: 30,
    },
    buttonText: {
        fontSize:20,
        fontWeight: "300",
        color: "#fff",
        textAlign: "center"
    }
});
