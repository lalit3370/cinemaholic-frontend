import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import { useTheme } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
export default function MovieScreen({ navigation }) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.text }}>This is Movie Screen</Text>
      <Button
        title="test"
        onPress={() => navigation.navigate("Recommendation")}
      />
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
});
