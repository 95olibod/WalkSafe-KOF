import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ContactItem, useContacts } from "../context/contactContext";
import * as Contacts from "expo-contacts";
import contactReducer from "../context/contactsReducer";

const ContactCard = () => {
  const [allContacts, setAllContact] = useState<ContactItem[]>([]);
  const { contactsList, dispatch } = useContacts();

  const addFavoriteContact = (contact: ContactItem) => {
    const contactExist = allContacts.find(
      (searchedContact) => contact.contactName === searchedContact.contactName
    );

    if (!contactExist) {
      setAllContact([...allContacts, contact]);
    }
  };

  console.log(allContacts);

  const removeFavoriteContact = (contact: ContactItem) => {
    const filteredList = allContacts.filter(
      (searchedContact) => searchedContact !== contact
    );

    setAllContact(filteredList);
  };

  async function getAllContacts() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          const name = data[i].name;
          const id = data[i].id;
          const contactPhone = data[i].phoneNumbers;
          const phoneNumber = contactPhone?.map((contact) => contact.number);

          dispatch({
            type: "add-to-contacts",
            payload: {
              contactId: id,
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
        keyExtractor={(contact) => contact.contactId}
      />
      <Text>FAVORITER</Text>
      <ScrollView>
        <FlatList
          data={allContacts}
          renderItem={({ item }) => {
            return (
              <View style={styles.contactBox}>
                <Text
                  onPress={() => removeFavoriteContact(item)}
                  style={styles.title}
                >
                  {item.contactName}
                </Text>
              </View>
            );
          }}
          keyExtractor={(contact) => contact.contactId}
        />
      </ScrollView>
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
    marginTop: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
