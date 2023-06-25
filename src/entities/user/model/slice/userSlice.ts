import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
        setuserInfo(state: UserStateSchema, action: PayloadAction<UserInfo>) {
            state.userInfo = action.payload
        },
        setAuth(state: UserStateSchema, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    }
})

export const { actions: userStateActions, reducer: userStateReducer } =
    userSlice
