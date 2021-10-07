import React from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableHighlight,
  Text,
} from "react-native";
import { ContactItem } from "../context/contactContext";

interface Props {
  allContacts: ContactItem[];
  getAllContacts: () => void;
}

const ContactButton = ({ allContacts, getAllContacts }: Props) => {
  if (allContacts.length < 1) {
    return (
      <View style={styles.buttonStyle}>
        <TouchableHighlight
          style={[styles.button]}
          onPress={() => getAllContacts()}
        >
          <Text style={[styles.buttonText]}>Hämta kontakter</Text>
        </TouchableHighlight>
      </View>
    );
  } else return null;
};

export default ContactButton;

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 8,
  },
  button: {
    backgroundColor: "rgba(45, 155, 240, 0.4)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
  },
});
