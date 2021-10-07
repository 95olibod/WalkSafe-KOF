import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { useContacts } from "../context/contactContext";
import ContactCard from "../components/contactCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/rootStackNavigator";
import KofaLogo from "../public/images/logoWalkSafe.png";

type Props = NativeStackScreenProps<RootStackParamList, "Kontakter">;

//Renders contactscreen. Displays contactbook
const ContactsScreen = ({ navigation }: Props) => {
  const { favouriteContacts } = useContacts();

  return (
    <View style={styles.root}>
      <Image source={KofaLogo} style={styles.logo} />
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
export default ContactsScreen;

const styles = StyleSheet.create({
  root: {
    marginRight: 30,
    marginLeft: 30,
    height: "100%",
  },
  button: {
    backgroundColor: "rgba(45, 155, 240, 0.4)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
  },
  logo: {
    width: 110,
    height: 70,
    marginTop: -20,
    alignSelf: "flex-end",
  },
});
