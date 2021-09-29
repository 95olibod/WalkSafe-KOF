import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";


const informationSwitches = () => {
    const [isLocation, setIsLocation] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isBatteri, setIsBatteri] = useState(false);
    const [isMoment, setIsMoment] = useState(false);
    const [isSignal, setIsSignal] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState); 
    const toggleLocationSwitch = () => setIsLocation(previousState => !previousState);
    const toggleBatteriSwitch = () => setIsBatteri(previousState => !previousState);
    const toggleMomentSwitch = () => setIsMoment(previousState => !previousState);
    const toggleSignalSwitch = () => setIsSignal(previousState => !previousState);

    return(
        <View>
            <View style={style.flexrow}>
                <View style={style.textrow}>
                    <Text style={style.textstylning}>Plats</Text>
                    <Text style={style.textstylning}>Senast aktiv</Text>
                    <Text style={style.textstylning}>Batteri</Text>
                    <Text style={style.textstylning}>Senast rörelse</Text>
                    <Text style={style.textstylning}>Täckning</Text>
                </View>
                <View style={style.container}>
                    <Switch 
                        style={style.switchstylning}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isLocation ? "rgba(40, 150, 235, 0.7)" : "rgba(45, 155, 240, 0.8)"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleLocationSwitch}
                        value={isLocation}
                    />
                    <Switch 
                        style={style.switchstylning}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? "rgba(40, 150, 235, 0.7)" : "rgba(45, 155, 240, 0.8)"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Switch 
                        style={style.switchstylning}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isBatteri ? "rgba(40, 150, 235, 0.7)" : "rgba(45, 155, 240, 0.8)"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleBatteriSwitch}
                        value={isBatteri}
                    />
                    <Switch 
                        style={style.switchstylning}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isMoment ? "rgba(40, 150, 235, 0.7)" : "rgba(45, 155, 240, 0.8)"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleMomentSwitch}
                        value={isMoment}
                    />
                    <Switch 
                        style={style.switchstylning}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isSignal ? "rgba(40, 150, 235, 0.7)" : "rgba(45, 155, 240, 0.8)"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSignalSwitch}
                        value={isSignal}
                    />
                </View>
            </View>
        </View>
    )
}

export default informationSwitches;

const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginTop: 5,
        marginLeft: 195,
    },
    flexrow: {
        flexDirection: "row",
    },
    textrow: {
        marginTop: 10,
    },
    textstylning: {
        color: "white",
        marginBottom: 35,
    },
    switchstylning: {
        marginBottom: 30,
    }, 
});