import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { ContactItem } from "../context/contactContext";

interface Props {
    allContacts: ContactItem[];
    filterContacts: (text: string) => void;
}

const SearchBar = ({ allContacts, filterContacts }: Props) => {
    if (allContacts.length > 0) {
        return (
            <View>
                <TextInput
                    placeholder="Sök kontakt"
                    style={styles.searchBar}
                    onChangeText={(text) => filterContacts(text)}
                />
            </View>
        );
    } else return <View></View>;
};
export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#bcbcbc",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 8,
        marginBottom: 10,
    },
});
