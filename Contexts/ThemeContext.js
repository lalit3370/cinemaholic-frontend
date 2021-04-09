import React from "react";

const ThemeContext = React.createContext();

export default ThemeContext;
// {
//     theme: CombinedDefaultTheme,
//     toggleTheme: (theme)=>{
//         theme= (theme===CombinedDefaultTheme)? CombinedDarkTheme:CombinedDefaultTheme;
//     }
// }
