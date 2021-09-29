import React, { useState } from "react";
import { View, Text, Button, Switch } from "react-native";
import InformationSwitches from "../components/informationSwitches"

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
            <Text style={{color: "white"}}>Välj vilken information som ska vara på meddelandet</Text>
            <InformationSwitches/>
          </View>
      )
  }
  
  export default InformationPage;