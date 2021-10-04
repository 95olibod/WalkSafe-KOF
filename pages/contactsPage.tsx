import * as Contacts from "expo-contacts";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { ContactItem, useContacts } from "../context/contactContext";
import ContactCard from "../components/contactCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";

// interface Props {
//     onGoBack: () => void;
//     onSetPage: (page: string) => void;
// }

type Props = NativeStackScreenProps<RootStackParamList, "Contact">;

const ContactsPage = ({ navigation }: Props) => {
    return (
        <ScrollView style={styles.contentContainer}>
            {/* <Button title="Gå tillbaka" onPress={onGoBack}></Button> */}
            <Button
                title="Gå till information"
                onPress={() => navigation.navigate("Information")}
            ></Button>
            <ContactCard />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
    },
    text: {
        color: "white",
    },
    contentContainer: {
        marginRight: 30,
        marginLeft: 30,
        height: "100%",
    },
    cont: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "rgba(247,247,247,1.0)",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    title: {
        fontSize: 32,
    },
});

export default ContactsPage;
