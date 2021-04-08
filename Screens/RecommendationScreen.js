import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
import { Text, StyleSheet, View, Button, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native"


export default function RecommendationScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={{ backgroundColor: colors.card, ...styles.container }}>
            <Text style={{ color: colors.text }}>This is Recommendation Screen</Text>
            <Button title="test" onPress={() => navigation.navigate('Home')} />
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