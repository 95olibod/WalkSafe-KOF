import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

const InformationScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Text>INFORMATION page</Text>
            <Button
                title="Sätt timer"
                onPress={() => navigation.navigate("Timer")}
            ></Button>
        </View>
    );
};

export default InformationScreen;
