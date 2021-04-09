import React, { useContext, useState } from "react";
import {
  CombinedDefaultTheme,
  CombinedDarkTheme,
} from "./CustomProperties/Theme";
import ThemeContext from "./Contexts/ThemeContext";
import Home from "./Components/Home";
function App() {
  const [theme, setTheme] = useState(CombinedDefaultTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}
export default App;
