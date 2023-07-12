import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LS_AUTH_DATA } from 'shared/constants/localStorage'
import { UserStateSchema, UserInfo } from '../types/userStateSchema'

const initialState: UserStateSchema = {
    isAuth: false,
    userInfo: {
        id: 0,
        name: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state: UserStateSchema, action: PayloadAction<UserInfo>) {
            state.isAuth = true
            state.userInfo = action.payload
        },
        initAuth(state: UserStateSchema) {
            const authData: string | null = localStorage.getItem(LS_AUTH_DATA)
            if (authData) {
                state.isAuth = true
                state.userInfo = JSON.parse(authData) as UserInfo
            }
        },
        logout(state: UserStateSchema) {
            state.isAuth = false
            state.userInfo = initialState.userInfo
            localStorage.removeItem(LS_AUTH_DATA)
        }
    }
})

export const { actions: userStateActions, reducer: userStateReducer } =
    userSlice
