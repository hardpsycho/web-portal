import { type ReactNode } from 'react'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

const AppRoutes = {
    MAIN: '/',
    ABOUT: '/about',
    NOT_FOUND: '/*'
} as const

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes]

interface RouterConfiguration {
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
    },

    // последний элемень
    [AppRoutes.NOT_FOUND]: {
        path: '/*',
        element: <NotFoundPage />
    }
}
