import { useContext } from "react"
import { LS_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

export interface UseThemeReturn {
    currentTheme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeReturn => {
    const {currentTheme, setTheme} = useContext(ThemeContext)
    const newTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    const toggleTheme = () => {
        setTheme(newTheme)
        localStorage.setItem(LS_THEME_KEY, newTheme)
    }


    return {currentTheme, toggleTheme}
}
