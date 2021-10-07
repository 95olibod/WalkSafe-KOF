import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import InformationSwitches from "../components/informationSwitches";
import SmsInputValidation from "../components/smsInputValidation";
import { SafeAreaView } from "react-native-safe-area-context";
import { InformationContext } from "../context/informationContext";
import KofaLogo from "../public/images/logoWalkSafe.png";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

const InformationScreen = ({ navigation }: Props) => {
    const { personalMessage } = useContext(InformationContext);

    return(
        <SafeAreaView style={styles.root}>
            <Image source={KofaLogo} style={styles.logo}></Image>
            <Text style={styles.textstyle}>Inkludera i SMS-utskick</Text>
            <InformationSwitches/>
            <SmsInputValidation/>
          {personalMessage ? (
            <TouchableHighlight
          style={[styles.button]}
          onPress={() => navigation.navigate("Timer")}
        >
          <Text style={[styles.buttonText]}>Gå vidare</Text>
        </TouchableHighlight>
          ) : null}
        </SafeAreaView>
    );
};

export default InformationScreen;
const styles = StyleSheet.create ({
    root: {
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 30,
    },
    logo: {
        width: 110,
        height: 70,
        marginTop: -20,
        alignSelf: "flex-end",
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
