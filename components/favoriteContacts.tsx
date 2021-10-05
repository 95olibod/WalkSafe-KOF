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
    favoriteContacts: ContactItem[];
    removeFavoriteContact: (item: ContactItem) => void;
}

const FavoriteContacts = ({
    favoriteContacts,
    removeFavoriteContact,
}: Props) => {
    if (favoriteContacts.length > 0) {
        return (
            <View>
                <Text style={styles.text}>Favoriter</Text>
                <FlatList
                    data={favoriteContacts}
                    style={styles.container}
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight
                                style={styles.contactBox}
                                onPress={() => removeFavoriteContact(item)}
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
            <View style={styles.noFavorites}>
                <Text style={styles.text}>Favoriter</Text>
                <Text style={styles.title}>Inga favoritkontakter valda</Text>
            </View>
        );
};
export default FavoriteContacts;

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
    noFavorites: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 10,
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
    },
});
