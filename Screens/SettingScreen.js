import React from "react";
import {
  Appbar,
  Provider as PaperProvider,
  Text,
  Button,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import ThemeToggle from "../Components/ThemeToggle";

export default function RecommendationScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.card, ...styles.container }}>
      <Text>Toggle Theme</Text>
      <ThemeToggle />
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
    color: "black",
  },
});
