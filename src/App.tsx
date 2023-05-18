import { Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

export const App = () => {
    const {currentTheme, toggleTheme} = useTheme()

    return (
        <div className={`app ${currentTheme}`}>
            <Suspense fallback='<div>Loading...</div>'>
                <button onClick={toggleTheme}>Сменить тему</button>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/about'>О нас</NavLink>
                <Routes>
                    <Route path='/' element={<MainPageLazy />}/>
                    <Route path='/about' element={<AboutPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
