import React from "react";
import { FlatList, TouchableHighlight, Text, StyleSheet } from "react-native";
import { ContactItem } from "../context/contactContext";

interface Props {
    filteredContacts: ContactItem[];
    addFavoriteContact: (item: ContactItem) => void;
}

const AllContacts = ({ filteredContacts, addFavoriteContact }: Props) => {
    return (
        <FlatList
            data={filteredContacts}
            renderItem={({ item }) => {
                return (
                    <TouchableHighlight
                        style={styles.contactBox}
                        onPress={() => addFavoriteContact(item)}
                    >
                        <Text style={styles.title}>{item.contactName}</Text>
                    </TouchableHighlight>
                );
            }}
            keyExtractor={(contact) => contact.contactId}
        />
    );
};
export default AllContacts;

const styles = StyleSheet.create({
    contactBox: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderColor: "black",
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
});
