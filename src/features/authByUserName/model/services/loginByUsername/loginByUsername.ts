import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { UserInfo, userStateActions } from 'entities/user'
import { StateSchema } from 'app/providers/StoreProvider'
import i18n from 'shared/config/i18n/config'
import { LS_AUTH_DATA } from 'shared/constants/localStorage'

export const loginByUsername = createAsyncThunk<
    UserInfo,
    object,
    { state: StateSchema }
>('login/loginByUsername', async function (emptyObject, thunkApi) {
    const {
        login: { username, password }
    } = thunkApi.getState()
    try {
        const response = await axios.post<UserInfo | undefined>(
            'http://localhost:8000/login',
            {
                username,
                password
            },
            {
                headers: {
                    Authorization: 'token'
                }
            }
        )

        if (!response.data) throw new Error('ошибка выполнения авторизации')

        thunkApi.dispatch(userStateActions.setAuth(response.data))
        localStorage.setItem(LS_AUTH_DATA, JSON.stringify(response.data))

        return response.data
    } catch (error: unknown) {
        console.log('error', error)
        if (axios.isAxiosError(error)) {
            if (error.response?.status === 403) {
                return thunkApi.rejectWithValue(
                    i18n.t('incorrect_password', { ns: 'login-form' })
                )
            }
        }
        return thunkApi.rejectWithValue(i18n.t('unknown_error'))
    }
})
