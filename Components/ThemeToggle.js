import React, { useContext, useState } from "react";
import { Switch } from "react-native-paper";
import ThemeContext from "../Contexts/ThemeContext";
import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
} from "../CustomProperties/Theme";

export default function ThemeToggle() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    var temp =
      theme == CombinedDefaultTheme ? CombinedDarkTheme : CombinedDefaultTheme;
    setTheme(temp);
  }
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    toggleTheme();
  };

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
}
