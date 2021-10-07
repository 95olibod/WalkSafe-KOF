import React, { useContext } from "react";
import { Formik } from "formik";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import SmsMessageInput from "./smsMessageInput";
import { InformationContext } from "../context/informationContext";

interface Post {
    message: string;
}

const defaultPost: Post = { message: "" };

type PostSchemaType = Record<keyof Post, Yup.AnySchema>;

const PostSchema = Yup.object().shape<PostSchemaType>({
    message: Yup.string().required("Detta fält behöver innehålla något").trim().min(2, "Behöver minst 2 bokstäver"),
});

export default function SmsInputValidation() {
    const { addPersonalMessage, personalMessage } =
        useContext(InformationContext);

    const handleSubmitForm = (post: Post) => {
        addPersonalMessage(post.message);
    };

    return (
        <View style={styles.root}>
            <Formik
                initialValues={defaultPost}
                onSubmit={handleSubmitForm}
                validationSchema={PostSchema}
            >
                {({
                    touched,
                    errors,
                    values,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                }) => (
                    <>
                        <SmsMessageInput
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                            label="Personligt meddelande"
                            value={values.message}
                            onChangeText={handleChange<keyof Post>("message")}
                            onBlur={handleBlur<keyof Post>("message")}
                            helperText={touched.message && errors.message}
                            onChange={() => handleSubmit()}
                        />
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    textStylning: {
        color: "white",
    },
});
