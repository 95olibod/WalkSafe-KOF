import React from 'react';
import { Formik } from 'formik';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import SmsMessageInput from './smsMessageInput';


interface Post {
    message: string;
}

const defaultPost: Post = { message: "" };

type PostSchemaType = Record<keyof Post, Yup.AnySchema>

const PostSchema = Yup.object().shape<PostSchemaType>({
    message: Yup.string().required().trim().min(2),
});

export default function SmsInputValidation() {

    const handleSubmitForm = (post: Post) => {
        console.log(post);
    }

    return (
        <View style={style.container}>
            <Formik
                initialValues={defaultPost}
                onSubmit={handleSubmitForm}
                validationSchema={PostSchema}
            >
                {({ touched, errors, values, handleChange, handleSubmit, handleBlur }) => (
                    <>
                        <SmsMessageInput
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                            label="Personligt meddelande"
                            value={values.message}
                            onChangeText={handleChange<keyof Post>('message')}
                            onBlur={handleBlur<keyof Post>('message')}
                            helperText={touched.message && errors.message}
                            onChange={() => handleSubmit()}
                        />

                        {/* <Button title="Spara meddelandet" onPress={() => handleSubmit()} /> */}
                    </>
                )}
            </Formik>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    textStylning: {
        color: 'white',
    },
});