import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../Screens/HomeScreen";
import RecommendationScreen from "../Screens/RecommendationScreen";
const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator swipeEnabled={true}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Recommendation" component={RecommendationScreen} />
        </Tab.Navigator>
    );
}

