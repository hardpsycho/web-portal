import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

const loginSlice = createSlice({
    name: 'authByUsername',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginByUsername.pending, (state) => {
            // Add user to the true array
            state.error = undefined
            state.isLoading = true
        }),
            builder.addCase(loginByUsername.fulfilled, (state) => {
                // Add user to the state array
                state.isLoading = false
            }),
            builder.addCase(loginByUsername.rejected, (state, action) => {
                console.log('action', action)
                // Add user to the state array
                state.isLoading = false
                if (typeof action.payload === 'string') {
                    state.error = action.payload
                }
            })
    }
})

export const { reducer: loginReducer, actions: loginActions } = loginSlice
