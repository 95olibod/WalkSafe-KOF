import React from "react";
import {
  FlatList,
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { ContactItem } from "../context/contactContext";

interface Props {
  filteredContacts: ContactItem[];
  addFavouriteContact: (item: ContactItem) => void;
}

// component that returns flatlist of all contacts from your device

const AllContacts = ({ filteredContacts, addFavouriteContact }: Props) => {
  return (
    <View style={styles.root}>
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
  root: {
    paddingBottom: 20, 
    flex: 1
  },
  contactBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "black",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 18,
  },
});
