import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Button,
    Text,
    FlatList,
    SafeAreaView,
} from "react-native";
import { ContactItem, useContacts } from "../context/contactContext";
import * as Contacts from "expo-contacts";
import contactReducer from "../context/contactsReducer";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];

const ContactCard = () => {
    const [allContacts, setAllContact] = useState<ContactItem[]>([]);
    const { contactsList, dispatch } = useContacts();

    const addFavoriteContact = (contact: ContactItem) => {
        setAllContact([...allContacts, contact]);
    };
    console.log(allContacts);

    async function getAllContacts() {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    const name = data[i].name;
                    const contactPhone = data[i].phoneNumbers;
                    const phoneNumber = contactPhone?.map(
                        (contact) => contact.number
                    );
                    dispatch({
                        type: "add-to-contacts",
                        payload: {
                            contactName: name,
                            phoneNumber: phoneNumber?.toString(),
                        },
                    });
                }
            }
        }
    }

    //     const renderItem = ({ contactName }: ContactItem) => (
    //       <Item contactName={contactName} />
    //     );

    return (
        <SafeAreaView style={styles.container}>
            {/* LÄGG IN HÄMTAR KONTAKTER (loading)..... */}
            <Button
                title="Hämta kontakter i kontakter"
                onPress={() => getAllContacts()}
            />

            <FlatList
                data={contactsList}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.contactBox}>
                            <Text
                                onPress={() => addFavoriteContact(item)}
                                style={styles.title}
                            >
                                {item.contactName}
                            </Text>
                        </View>
                    );
                }}
                keyExtractor={(contact) => contact.contactName}
            />
        </SafeAreaView>
    );
};

export default ContactCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contactBox: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderColor: "black",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
