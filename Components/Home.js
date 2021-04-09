import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text } from "react-native";
import { Provider as PaperProvider, Appbar } from "react-native-paper";
import MovieScreen from "../Screens/MovieScreen";
import RecommendationScreen from "../Screens/RecommendationScreen";
import ThemeContext from "../Contexts/ThemeContext";
import AppBar from "./AppBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

export default function Home() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="black" />
      <AppBar />
      <NavigationContainer initialRoute="Movies" theme={theme}>
        <Tab.Navigator swipeEnabled={true}>
          <Tab.Screen name="Movies" component={MovieScreen} />
          <Tab.Screen name="Recommendations" component={RecommendationScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
