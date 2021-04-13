import React, { useState } from "react";
import Index from "./Components/Index";
import ThemeContext from "./Contexts/ThemeContext";
import {
  CombinedDefaultTheme
} from "./CustomProperties/Theme";
function App() {
  const [theme, setTheme] = useState(CombinedDefaultTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Index />
    </ThemeContext.Provider>
  );
}
export default App;
