import React from "react";
import { View, Text, TextInputProps, TextInput as NativeTextInput, StyleSheet } from "react-native";

interface Props extends TextInputProps {
    label: string;
    helperText?: string | false;
}

export default function SmsMessageInput({
    label,
    helperText,
    ...textInputProps
}: Props) {
    
    return(
        <View style={style.root}>
            <Text
                style={[
                    style.label,
                    helperText ? { color: 'red' } : null
                ]}
            >
                {label}
            </Text>
            <NativeTextInput
                {...textInputProps}
                style={[
                    style.input,
                    helperText ? { borderColor: 'red'} : null
                ]}
            />
            {helperText && <Text style={style.helperText}>{helperText}</Text>}
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        width: '100%',
        marginBottom: 1,
    },
    label: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
    },
    helperText: {
        color: 'red',
    },
    input: {
        width: '100%',
        padding: 2,
        backgroundColor: "rgba(45, 155, 240, 0.4)",
        borderBottomWidth: 1,
        borderColor: "#fff",
        fontSize: 16,
        marginVertical: 4,
    },
});