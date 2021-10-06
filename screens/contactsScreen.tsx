import * as Contacts from "expo-contacts";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ContactItem, useContacts } from "../context/contactContext";
import ContactCard from "../components/contactCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

const ContactsPage = ({ navigation }: Props) => {
  const { favouriteContacts } = useContacts();

  return (
    <View style={styles.contentContainer}>
      {favouriteContacts.length > 0 ? (
        <View style={styles.buttonStyle}>
          <Button
            title="Gå till information"
            onPress={() => navigation.navigate("Information")}
          ></Button>
        </View>
      ) : (
        null
      )}
      <ContactCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
  },
  contentContainer: {
    marginRight: 30,
    marginLeft: 30,
    height: "100%",
  },
  cont: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 32,
  },
  buttonStyle: {
    marginTop: 8,
  },
});

export default ContactsPage;
