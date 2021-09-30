import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { ContactItem, useContacts } from "../context/contactContext";
import * as Contacts from "expo-contacts";
import contactReducer from "../context/contactsReducer";

const ContactCard = () => {
  const [contactButton, setButtonDisabled] = useState(false);

  //Byta namn till favoritContacts ist?
  //const [allContacts, setAllContact] = useState();
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
    const filteredList = favoriteContacts.filter(
      (searchedContact) => searchedContact !== contact
    );

    dispatch({
      type: "remove-from-contacts",
      payload: {
        contactId: contact.contactId,
        contactName: contact.contactName,
        phoneNumber: contact.phoneNumber?.toString(),
      },
    });

    //setAllContact(filteredList);
  };

  async function getAllContacts() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          const contactName = data[i].name;
          const contactId = data[i].id;
          const contactPhone = data[i].phoneNumbers;
          const phoneNumber = contactPhone?.map((contact) => contact.number);
          //const phoneNumber = contactPhone?.map((contact) => contact.number);
          

          //TODO
          //KOLLA IMORGON 30/9
      //     https://stackoverflow.com/questions/59667515/type-object-must-have-a-symbol-iterator-method-that-returns-an-iterator
      //KOLLA ÄVEN REMOVE FROM FAVORITES

          console.log(allContacts);
          
          const newContact = {contactId: contactId, contactName: contactName, phoneNumber: phoneNumber?.toString()}
          setAllContact([...allContacts, newContact])


      //     setAllContact([
      //           ...allContacts,            
      //         {id: contactId,
      //         contactName: contactName
      //       //   phoneNumbers: phoneNumber?.toString()
      //       //   phoneNumber: phoneNumber?.toString(),
      //     }]
      
      
      //     );
        }
      }
    }

    setButtonDisabled(true);
  }

  //VI SKA NOG LÄGGA TILL FAVORITLISTAN TILL CONTEXTEN. SÅ VI KOMMER ÅT DEN ÖVERALLT? Går skicka sms osv.

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ContactsPage</Text>
      {/* LÄGG IN HÄMTAR KONTAKTER (loading)..... */}
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
  contactBtn: {},
  text: {
    fontSize: 30,
    color: "white",
  },
});
