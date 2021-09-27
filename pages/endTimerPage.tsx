import React from "react";
import { Button, View, StyleSheet } from "react-native";


interface Props {
      onSetPage: (page: string) => void;
  }

const EndTimerPage = ({onSetPage}: Props) => {
    return(
        <View>
               <Button title="Gå hem" onPress={() => onSetPage("home")}></Button>
        </View>
    );
}

export default EndTimerPage;