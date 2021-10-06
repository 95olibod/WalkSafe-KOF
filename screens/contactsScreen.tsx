import * as Contacts from "expo-contacts";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { ContactItem, useContacts } from "../context/contactContext";
import ContactCard from "../components/contactCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

const ContactsPage = ({ navigation }: Props) => {
  const { favouriteContacts } = useContacts();

  return (
    <View style={styles.contentContainer}>
      <ContactCard />
      {favouriteContacts.length > 0 ? (
        
          <TouchableHighlight
            style={[styles.button]}
            onPress={() => navigation.navigate("Information")}
          >
            <Text style={[styles.buttonText]}>Gå vidare</Text>
          </TouchableHighlight>
        
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
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
  button: {
    backgroundColor: "rgba(45, 155, 240, 0.4)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
  },
});

export default ContactsPage;
