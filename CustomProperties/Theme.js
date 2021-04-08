import React from "react";

import { configureFonts, DefaultTheme } from "react-native-paper";
import fontConfig from "./Font";

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    roundness: 30,
    // colors: {
    //     ...DefaultTheme.colors,
    //     primary: "#2b2e4a",
    //     accent: "#e84545",
    //     background: "black",
    //     text: "white"
    // },
    dark: 1,
};

export default theme;