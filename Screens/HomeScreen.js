import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import MovieScreen from "./MovieScreen";
import RecommendationScreen from "./RecommendationScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
export default function HomeScreen() {
  const theme = useTheme();
  return (

      // <NavigationContainer initialRoute="Movies" theme={theme} >
        <Tab.Navigator swipeEnabled={true}>
          <Tab.Screen name="Movies" component={MovieScreen} />
          <Tab.Screen name="Recommendations" component={RecommendationScreen} />
        </Tab.Navigator>
      // </NavigationContainer>

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
