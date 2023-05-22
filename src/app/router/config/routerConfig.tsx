import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { ReactNode } from "react"

const AppRoutes = {
    MAIN: '/',
    ABOUT: '/about',
} as const

type AppRoutes = typeof AppRoutes[keyof typeof AppRoutes]

type RouterConfiguration = {
    path: AppRoutes
    element: ReactNode
}

export const routerConfig: Record<AppRoutes, RouterConfiguration> = {
    [AppRoutes.MAIN]: {
        path: '/',
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: '/about',
        element: <AboutPage />
    }
}
