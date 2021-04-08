import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useTheme } from "react-native-paper";
import {useTheme } from "@react-navigation/native"
import { Button, StyleSheet, Text, View } from "react-native";
import {Appbar} from "react-native-paper";
export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>This is Home Screen</Text>
      <Button title="test" onPress={() => navigation.navigate('Recommendation')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontSize: 40,
    // color: theme.colors.text
    color: "black"
  }
});