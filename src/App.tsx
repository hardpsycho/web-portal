import { FC, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'

export const App: FC = () => {
    return (
        <Suspense fallback='<div>Loading...</div>'>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/about'>О нас</NavLink>
            <Routes>
                <Route path='/' element={<MainPageLazy />}/>
                <Route path='/about' element={<AboutPageLazy />}/>
            </Routes>
        </Suspense>
    )
}