import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { ContactItem } from "../context/contactContext";

interface Props {
  allContacts: ContactItem[];
  filterContacts: (text: string) => void;
}

//Serach bar for contacts
const SearchBar = ({ allContacts, filterContacts }: Props) => {
  return (
    <View>
      {allContacts.length > 0 ? (
        <TextInput
          placeholder="Sök"
          placeholderTextColor="#fff"
          textAlign="center"
          style={styles.searchBar}
          onChangeText={(text) => filterContacts(text)}
        />
      ) : null}
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "rgba(45, 155, 240, 0.4)",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 8,
    marginBottom: 10,
    color: "#fff",
  },
});
