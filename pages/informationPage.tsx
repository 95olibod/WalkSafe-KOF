import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Contact">;

const InformationPage = ({ navigation }: Props) => {
    return (
        <View>
            <Text>INFORMATION page</Text>
            {/* <Button title="Gå tillbaka hem" onPress={onGoBack}></Button> */}           
            <Button
                title="Sätt timer"
                onPress={() => navigation.navigate("Timer")}
            ></Button>
        </View>
    );
};

export default InformationPage;
