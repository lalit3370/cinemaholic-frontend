import React from "react";
import { StyleSheet, View, Image, TextComponent } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SettingScreen from "../Screens/SettingScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
const BottomTab = createMaterialBottomTabNavigator();
import HomeScreen from "../Screens/HomeScreen";
export default function MovieScreen({ theme }) {
  return (
      <NavigationContainer theme={theme} initialRoute="Home">
        <BottomTab.Navigator>
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: () => {
                return (
                  <MaterialCommunityIcons
                    name="home"
                    color={theme.colors.icon}
                    size={26}
                  />
                );
              },
            }}
          />
          <BottomTab.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: () => {
                return (
                  <MaterialCommunityIcons
                    name="cog-outline"
                    color={theme.colors.icon}
                    size={26}
                  />
                );
              },
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: () => {
                return (
                  <MaterialCommunityIcons
                    name="account"
                    color={theme.colors.icon}
                    size={26}
                  />
                );
              },
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
});