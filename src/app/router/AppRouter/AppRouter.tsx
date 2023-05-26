import { Route, Routes } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'

export const AppRouter = () => {
  return (
    <main className={'main-content'}>
        <Routes>
            {
                Object.values(routerConfig).map(({path, element}) => {
                    return <Route key={path} path={path} element={element} />
                })
            }
        </Routes>
    </main>
  )
}
