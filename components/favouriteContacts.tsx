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

// component that returns flatlist of favourite contacts from contactContext

const FavouriteContacts = ({
  favouriteContacts,
  removeFavouriteContact,
}: Props) => {
  if (favouriteContacts.length > 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Tillagda nödkontakter:</Text>
        <FlatList
          data={favouriteContacts}
          style={styles.container}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight
                style={styles.contactBox}
                onPress={() => removeFavouriteContact(item)}
              >
                <Text style={styles.flatListText}>{item.contactName}</Text>
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
        <Text style={styles.title}>Tillagda nödkontakter:</Text>
        <Text style={styles.text}>Inga favoritkontakter valda</Text>
      </View>
    );
};
export default FavouriteContacts;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
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
  },
  text: {
    fontSize: 14,
    color: "#fff",
  },
  title: {
    fontSize: 25,
    color: "#fff",
  },
  flatListText: {
    fontSize: 20,
  },
  noFavourites: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 10,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
  },
});
