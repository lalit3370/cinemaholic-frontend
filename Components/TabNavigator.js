import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MovieScreen from "../Screens/MovieScreen";
import RecommendationScreen from "../Screens/RecommendationScreen";
const Tab = createMaterialTopTabNavigator();
import {useTheme} from "@react-navigation/native"
export default function TabNavigator() {
    const theme=useTheme();
    return (
        <Tab.Navigator swipeEnabled={true} theme={theme}>
            <Tab.Screen name="Movies" component={MovieScreen} />
            <Tab.Screen name="Recommendations" component={RecommendationScreen} />
        </Tab.Navigator>
    );
}

