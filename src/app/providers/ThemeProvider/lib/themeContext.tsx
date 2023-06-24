import { createContext } from 'react'

export enum Theme {
    LIGHT = 'app-light-theme',
    DARK = 'app-dark-theme'
}

export interface ThemeContextProps {
    currentTheme: Theme
    setTheme: (theme: Theme) => void
}

export const LS_THEME_KEY = 'current-theme'

export const ThemeContext = createContext<ThemeContextProps | null>(null)
