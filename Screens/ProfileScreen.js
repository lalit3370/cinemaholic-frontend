import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Provider as PaperProvider, Text,Button } from "react-native-paper";
import {  StyleSheet, View, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native"


export default function ProfileScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={{ backgroundColor: colors.card, ...styles.container }}>
            <Text>This is Profile Screen</Text>
            {/* <Button onPress={() => navigation.navigate('Home')}>click me</Button> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        // fontSize: 40,
        // color: theme.colors.text
        color: "black"
    }
});