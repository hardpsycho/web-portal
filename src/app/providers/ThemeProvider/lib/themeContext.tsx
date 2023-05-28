import { createContext } from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    currentTheme: Theme,
    setTheme: (theme: Theme) => void
}

export const LS_THEME_KEY = 'current-theme' 

export const ThemeContext = createContext<ThemeContextProps | null>(null)
