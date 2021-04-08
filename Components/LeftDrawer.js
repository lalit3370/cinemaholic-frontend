import { ThemeProvider } from "@react-navigation/native";
import React, { useState } from "react";
// import ThemeToggle from "./ThemeToggle";
// import { Text } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import { Drawer as PaperDrawer, IconButton } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RecommendationScreen from "../Screens/RecommendationScreen";
// import Icon from 'react-native-vector-icons/';
const Drawer = createDrawerNavigator();

function test() {
    return (

        <IconButton
            icon="theme-light-dark"
            size={20}
            onPress={() => console.log('Pressed')}
        />

    );
}

