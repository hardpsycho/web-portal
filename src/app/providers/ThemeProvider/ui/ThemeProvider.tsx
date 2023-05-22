import {  FC, useState } from "react"
import { LS_THEME_KEY, Theme, ThemeContext } from "../lib/themeContext"

const currentTheme: Theme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(currentTheme)

    return (
        <ThemeContext.Provider value={{
            currentTheme: theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
