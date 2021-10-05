import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ContactItem } from "../context/contactContext";

interface Props {
    allContacts: ContactItem[];
    getAllContacts: () => void;
}

const ContactButton = ({ allContacts, getAllContacts }: Props) => {
    if (allContacts.length < 1) {
        return (
            <View style={styles.buttonStyle}>
                <Button
                    title="Hämta kontakter"
                    onPress={() => getAllContacts()}
                />
            </View>
        );
    } else return <View></View>;
};

export default ContactButton;

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 8,
    },
});
