import { createContext, useState } from "react";

export const ThemeProvider = createContext();

//teranry opaerator
export function ThemeProvider ({ children  }) {
    const [theme, setTheme] = useState("light");

    const toogleTheme = () => {
        setTheme((perv) => (perv === "light" ? "dark" : "light"));
    }

    const value = {
        theme,
        toogleTheme
    }
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}