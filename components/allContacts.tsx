import React from "react";
import { FlatList, TouchableHighlight, Text, StyleSheet, View } from "react-native";
import { ContactItem } from "../context/contactContext";

interface Props {
    filteredContacts: ContactItem[];
    addFavouriteContact: (item: ContactItem) => void;
}

const AllContacts = ({ filteredContacts, addFavouriteContact }: Props) => {
    return (
        <View style={{ paddingBottom: 20, flex: 1 }}>
            <FlatList
                data={filteredContacts}
                renderItem={({ item }) => {
                    return (
                        <TouchableHighlight
                            style={styles.contactBox}
                            onPress={() => addFavouriteContact(item)}
                        >
                            <Text style={styles.title}>{item.contactName}</Text>
                        </TouchableHighlight>
                    );
                }}
                keyExtractor={(contact) => contact.contactId}
            />
        </View>
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
