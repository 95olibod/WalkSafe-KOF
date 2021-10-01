import React, { useState, useEffect } from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View } from 'react-native';

export default function BatteryLevel2() {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);
  // const [location, setLocation] = useState<number>(0);

  //GÖR EN CONTEXT TSM LOCATION

  useEffect(() => {
    const getBatteryLevel = async () => {
      const batteryLevel = await Battery.getBatteryLevelAsync();
      setBatteryLevel(Math.round(batteryLevel * 100));
    }
    getBatteryLevel();
  }, [])



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Batterinivå: {batteryLevel}</Text>
    </View>
  );
}

// export default class BatteryModule extends React.Component {
//   state = {
//     batteryLevel: null,
//   };

//   componentDidMount() {
//     this._subscribe();
//   }

// //   componentWillUnmount() {
// //     this._unsubscribe();
// //   }

//   async _subscribe() {
//     const batteryLevel = await Battery.getBatteryLevelAsync();
//     //batteryLevel = Math.round(batteryLevel * 100);
   
//     this.setState({ batteryLevel });
    
//     const bla = Battery.addBatteryLevelListener(({ batteryLevel }) => {
//       this.setState({ batteryLevel });
//       console.log('batteryLevel changed!', batteryLevel);
//     });
//   }

// //   _unsubscribe() {
// //     this._subscription && this._subscription.remove();
// //     this._subscription = null;
// //   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Batterinivå: {this.state.batteryLevel}</Text>
//       </View>
//     );
//   }
// }


const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      text: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderColor: "black",
        paddingHorizontal:16,
        paddingVertical: 8,
        marginTop: 8,
        marginHorizontal: 16,
      },
})
