import React from "react";
import {
  View,
  Text,
  TextInputProps,
  TextInput as NativeTextInput,
  StyleSheet,
} from "react-native";

interface Props extends TextInputProps {
  label: string;
  helperText?: string | false;
}

// component that returns a cusomized message from the user to be used in the SMS
const SmsMessageInput = ({ label, helperText, ...textInputProps }: Props) => {
  return (
    <View style={styles.root}>
      <Text style={[styles.label, helperText ? { color: "red" } : null]}>
        {label}
      </Text>
      <NativeTextInput
        {...textInputProps}
        style={[styles.input, helperText ? { borderColor: "red" } : null]}
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

export default SmsMessageInput;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    marginBottom: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  helperText: {
    color: "red",
  },
  input: {
    width: "100%",
    padding: 2,
    backgroundColor: "rgba(45, 155, 240, 0.4)",
    borderBottomWidth: 1,
    borderColor: "#fff",
    fontSize: 16,
    marginVertical: 4,
    color: "#fff",
  },
});
