import { useTheme } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
// import { colors } from "react-native-elements";
import { Appbar } from "react-native-paper";

export default function AppBar() {
  return (
    <Appbar.Header statusBarHeight={0}>
      <Appbar.Content title="Cinemaholic" />
    </Appbar.Header>
  );
}
