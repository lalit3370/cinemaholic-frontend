import React, { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import Index from "./Components/Index";
import ThemeContext from "./Contexts/ThemeContext";
import {
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from "./CustomProperties/Theme";

function App() {
  const schema = useColorScheme();
  const [theme, setTheme] = useState(
    schema === "dark" ? CombinedDarkTheme : CombinedDefaultTheme
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Index />
    </ThemeContext.Provider>
  );
}
export default App;
