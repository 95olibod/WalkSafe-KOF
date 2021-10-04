import * as Contacts from "expo-contacts";
import React, { useState } from "react";
import {
  Button, FlatList,
  SafeAreaView,
  ScrollView, StyleSheet,
  Text, View
} from "react-native";
import { ContactItem, useContacts } from "../context/contactContext";

const ContactCard = () => {
  const [contactButton, setButtonDisabled] = useState(false);

  const [allContacts, setAllContact] = useState<ContactItem[]>([]);

  const { favoriteContacts, dispatch } = useContacts();

  const addFavoriteContact = (contact: ContactItem) => {
    const contactExist = favoriteContacts.find(
      (searchedContact) => contact.contactName === searchedContact.contactName
    );

    if (!contactExist) {
      dispatch({
        type: "add-to-contacts",
        payload: {
          contactId: contact.contactId,
          contactName: contact.contactName,
          phoneNumber: contact.phoneNumber?.toString(),
        },
      });
    }
  };
  
  const removeFavoriteContact = (contact: ContactItem) => {
    const contactExist = favoriteContacts.find(
      (searchedContact) => contact.contactName === searchedContact.contactName
    );

    if(contactExist)
    {

      dispatch({
        type: "remove-from-contacts",
        payload: {
          contactId: contactExist.contactId,
          contactName: contactExist.contactName,
          phoneNumber: contactExist.phoneNumber?.toString(),
        },
      });
    }
  };

  async function getAllContacts() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {

        const newArray: ContactItem[] = [];

        for (let i = 0; i < data.length; i++) {
          const contactName = data[i].name;
          const contactId = data[i].id;
          const contactPhone = data[i].phoneNumbers;
          if (contactPhone) {
              const phoneNumber = contactPhone.map(
                  (contact) => contact.number
              );
              const newContact = {
                  contactId: contactId,
                  contactName: contactName,
                  phoneNumber: phoneNumber.toString(),
              };
              newArray.push(newContact);
          } else {
              const phoneNumber = "";
              const newContact = {
                  contactId: contactId,
                  contactName: contactName,
                  phoneNumber: phoneNumber.toString(),
              };
              newArray.push(newContact);
          }
      }
      setAllContact(newArray);
      }
    }
    setButtonDisabled(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ContactsScreen</Text>
      <View style={styles.contactBtn}>
        <Button
          disabled={contactButton}
          title="Hämta kontakter"
          onPress={() => getAllContacts()}
        />
      </View>
      
      <FlatList
        data={allContacts}
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
      <Text style={styles.text}>FAVORITER</Text>
     
      <ScrollView>
        <FlatList
        style={styles.container}
          data={favoriteContacts}
          renderItem={({ item }) => {
            return (
              <ScrollView style={styles.contactBox}>
                <Text
                  onPress={() => removeFavoriteContact(item)}
                  style={styles.title}
                >
                  {item.contactName}
                </Text>
              </ScrollView>
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
    flex: 1
  },
  contactBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "black",
    paddingHorizontal:16,
    paddingVertical: 8,
    marginTop: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    width: "100%",
  },
  contactBtn: {},
  text: {
    fontSize: 30,
    color: "white",
  },
});
