import { Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/libs/classNames/classNames'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

export const App = () => {
    const {currentTheme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', [currentTheme])}>
            <Suspense fallback='<div>Loading...</div>'>
                <button onClick={toggleTheme}>Сменить тему</button>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/about'>О нас</NavLink>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
