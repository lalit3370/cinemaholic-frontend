import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text } from "react-native";
import { Provider as PaperProvider, Appbar } from "react-native-paper";
import MovieScreen from "./BottomTab";
import RecommendationScreen from "../Screens/RecommendationScreen";
import ThemeContext from "../Contexts/ThemeContext";
import AppBar from "./AppBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BottomTab from "./BottomTab"
const Tab = createMaterialTopTabNavigator();

export default function Index() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="black" />
      <AppBar />
      <BottomTab theme={theme}/>
    </PaperProvider>
  );
}

