import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userStateReducer } from 'entities/user'
import { loginReducer } from 'features/authByUserName'
import { StateSchema } from './StateSchema'

export const createStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userStateReducer,
        login: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
