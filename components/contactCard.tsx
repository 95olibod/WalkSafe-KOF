import * as Contacts from "expo-contacts";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ContactItem, useContacts } from "../context/contactContext";
import AllContacts from "./allContacts";
import ContactButton from "./contactButton";
import FavouriteContacts from "./favouriteContacts";
import SearchBarContacts from "./searchBarContacts";

const ContactCard = () => {
  const [allContacts, setAllContact] = useState<ContactItem[]>([]);

  const { favouriteContacts, dispatch } = useContacts();

  const [filteredContacts, setFilteredContacts] =
    useState<ContactItem[]>(allContacts);

  const addFavouriteContact = (contact: ContactItem) => {
    const contactExist = favouriteContacts.find(
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

  const removeFavouriteContact = (contact: ContactItem) => {
    const contactExist = favouriteContacts.find(
      (searchedContact) => contact.contactName === searchedContact.contactName
    );

    if (contactExist) {
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

  const filterContacts = (text: string) => {
    const result = allContacts.filter((contact) => {
      return (
        contact.contactName.toLowerCase().search(text.toLocaleLowerCase()) != -1
      );
    });

    if (!result) {
      console.log("inga resultat");
    }

    setFilteredContacts(result);
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
            const phoneNumber = contactPhone.map((contact) => contact.number);
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
        setFilteredContacts(newArray);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ContactButton
        allContacts={allContacts}
        getAllContacts={getAllContacts}
      />
      <SearchBarContacts
        allContacts={allContacts}
        filterContacts={filterContacts}
      />

      <AllContacts
        filteredContacts={filteredContacts}
        addFavouriteContact={addFavouriteContact}
      />
      <FavouriteContacts
        favouriteContacts={favouriteContacts}
        removeFavouriteContact={removeFavouriteContact}
      />
    </SafeAreaView>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonStyle: {
    marginTop: 8,
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
