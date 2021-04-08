import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { StatusBar } from "react-native"
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Appbar,
} from "react-native-paper";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LeftDrawer from "./Components/LeftDrawer";
import TabNavigator from "./Components/TabNavigator"
const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};


const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <StatusBar backgroundColor="black" />
      <Appbar.Header statusBarHeight={0} >
        <Appbar.Action icon="menu" />
        <Appbar.Content title="Cinemaholic" />
      </Appbar.Header>
      <NavigationContainer initialRoute="Home" theme={CombinedDefaultTheme}>
        <TabNavigator />
        {/* <LeftDrawer /> */}
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;
