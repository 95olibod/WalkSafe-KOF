import React from "react";
import { View, Text, Button } from "react-native";

interface Props {
    onGoBack: () => void;
    onSetPage: (page: string) => void;
  }

  const InformationPage = ({onGoBack, onSetPage}: Props) => {
      return(
          <View>
                <Text>INFORMATION page</Text>
                {/* <Button title="Gå tillbaka hem" onPress={onGoBack}></Button> */}
                <Button
                title="gå tillbaka till contacts"
                onPress={() => onSetPage("contacts")}
            ></Button>
                <Button
                title="gå till timer"
                onPress={() => onSetPage("timer")}
            ></Button>
          </View>
      )
  }
  
  export default InformationPage;