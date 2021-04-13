import React from "react";
import MovieScreen from "./MovieScreen";
import RecommendationScreen from "./RecommendationScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
export default function HomeScreen() {
  return (
        <Tab.Navigator swipeEnabled={true}>
          <Tab.Screen name="Movies" component={MovieScreen} />
          <Tab.Screen name="Recommendations" component={RecommendationScreen} />
        </Tab.Navigator>
  );
}