import React, { useContext, useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { InformationContext } from "../context/informationContext";

const informationSwitches = () => {
    const {
        toggleBatterySwitch,
        toggleLocationSwitch,
        includeLocation,
        includeBattery,
    } = useContext(InformationContext);

    return (
        <View>
            <View style={style.flexrow}>
                <View style={style.textrow}>
                    <Text style={style.textstylning}>Platsinfo</Text>
                    <Text style={style.textstylning}>Batteritid</Text>
                </View>
                <View style={style.container}>
                    <Switch
                        style={style.switchstylning}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={
                            includeLocation
                                ? "rgba(40, 150, 235, 0.7)"
                                : "rgba(45, 155, 240, 0.8)"
                        }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleLocationSwitch}
                        value={includeLocation}
                    />
                    <Switch
                        style={style.switchstylning}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={
                            includeBattery
                                ? "rgba(40, 150, 235, 0.7)"
                                : "rgba(45, 155, 240, 0.8)"
                        }
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleBatterySwitch}
                        value={includeBattery}
                    />
                </View>
            </View>
        </View>
    );
};

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
        fontSize: 16,
    },
    switchstylning: {
        marginBottom: 30,
    },
});
