//screens/SettingsScreen.js
import React from "react";
import {View, Text, StyleSheet} from 'react-native';

function SettingsScreen() {
    return(
        <View style = {StyleSheet.container}>
            <Text>Settings Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SettingsScreen;