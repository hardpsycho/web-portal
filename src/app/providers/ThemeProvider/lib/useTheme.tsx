import { useContext } from 'react'
import { LS_THEME_KEY, Theme, ThemeContext } from './themeContext'

export interface UseThemeReturn {
    currentTheme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeReturn => {
    const ThemeContextData = useContext(ThemeContext)

    if (!ThemeContextData) {
        throw new Error('Something went wrong. Context is null')
    }

    const { currentTheme, setTheme } = ThemeContextData
    const newTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    const toggleTheme = () => {
        setTheme(newTheme)
        localStorage.setItem(LS_THEME_KEY, newTheme)
    }

    return { currentTheme, toggleTheme }
}
