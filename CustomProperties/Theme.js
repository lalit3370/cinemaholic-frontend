import React from "react";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    icon: "#FF4081",
    primary: "#243447",
    accent: "#FF4081",
    text: "#FF4081",
    // card: "#243447",
    surface2: "#00888F",
  },
};
export const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    icon: "white",
    primary: "#FF4081",
    card: "#243447",
    background: "#17202d",
    surface: "#243447",
    surface2: "#366BAA",
    accent: "#FF4081",
  },
};
