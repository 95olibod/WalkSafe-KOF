import React from "react";
import { View, Text, Button } from "react-native";

interface Props {
    onGoBack: () => void;
    onSetPage: (page: string) => void;
}

const InformationPage = ({ onGoBack, onSetPage }: Props) => {
    return (
        <View>
            <Text>Contacts page</Text>
            <Button title="Gå tillbaka" onPress={onGoBack}></Button>
            <Button
                title="gå till information"
                onPress={() => onSetPage("information")}
            ></Button>
        </View>
    );
};

export default InformationPage;
