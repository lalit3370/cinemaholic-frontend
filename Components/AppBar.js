import React from "react";
import {Text} from "react-native"
import { Appbar } from "react-native-paper";

export default function AppBar() {
  return (
    <Appbar.Header statusBarHeight={0}>
      <Appbar.Action icon="menu" />
      <Appbar.Content title="Cinemaholic" />
    </Appbar.Header>
  );
}
