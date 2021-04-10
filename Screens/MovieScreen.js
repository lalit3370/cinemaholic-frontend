import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Appbar,
  Provider as PaperProvider,
  Text,
  Button,
} from "react-native-paper";
import { StyleSheet, View, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function MovieScreen() {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.card, ...styles.container }}>
      <Text>This is Movie Screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
});
