import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, Image, TextComponent } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Avatar,
  Card,
  Button,
  Title,
  Paragraph,
  Surface,
  Text,
} from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SettingScreen from "./SettingScreen";
import ProfileScreen from "./ProfileScreen";
const BottomTab = createMaterialBottomTabNavigator();

function Temp() {
  return <Text>this is home</Text>;
}

export default function MovieScreen({ navigation }) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={Temp}
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
    </View>
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
