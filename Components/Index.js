import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState, useContext } from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import data1 from "../assets/movie data/data1";
import ThemeContext from "../Contexts/ThemeContext";
import BottomTab from "./BottomTab";

const Tab = createMaterialTopTabNavigator();

export default function Index() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="black" />
      <BottomTab theme={theme} />
    </PaperProvider>
  );
}
