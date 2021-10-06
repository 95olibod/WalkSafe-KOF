import React from "react";
import {
    View,
    FlatList,
    TouchableHighlight,
    Text,
    StyleSheet,
} from "react-native";
import { ContactItem } from "../context/contactContext";

interface Props {
    favouriteContacts: ContactItem[];
    removeFavouriteContact: (item: ContactItem) => void;
}

const FavouriteContacts = ({
    favouriteContacts,
    removeFavouriteContact,
}: Props) => {
    if (favouriteContacts.length > 0) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Favoriter</Text>
                <FlatList
                    data={favouriteContacts}
                    style={styles.container}
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight
                                style={styles.contactBox}
                                onPress={() => removeFavouriteContact(item)}
                            >
                                <Text style={styles.title}>
                                    {item.contactName}
                                </Text>
                            </TouchableHighlight>
                        );
                    }}
                    keyExtractor={(contact) => contact.contactId}
                />
            </View>
        );
    } else
        return (
            <View style={styles.noFavourites}>
                <Text style={styles.text}>Favoriter</Text>
                <Text style={styles.title}>Inga favoritkontakter valda</Text>
            </View>
        );
};
export default FavouriteContacts;

const styles = StyleSheet.create({
    container: {
        height: 120,
        marginBottom: 8,
    },
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
    text: {
        fontSize: 30,
        color: "white",
    },
    noFavourites: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 10,
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
    },
});
