import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'

export const AppRouter = () => {
  return (
    <Routes>
        {
            Object.values(routerConfig).map(({path, element}) => {
                return <Route key={path} path={path} element={element} />
            })
        }
    </Routes>
  )
}
