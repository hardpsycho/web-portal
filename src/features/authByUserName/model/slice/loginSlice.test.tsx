import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginReducer, loginActions } from './loginSlice'

describe('loginSlice', () => {
    it('setUsername', () => {
        const loginState: DeepPartial<LoginSchema> = { username: '' }
        const loginStateAfter = loginReducer(
            loginState as LoginSchema,
            loginActions.setUsername('Sergio')
        )
        expect(loginStateAfter.username).toBe('Sergio')
    })

    it('setPassword', () => {
        const loginState: DeepPartial<LoginSchema> = { password: '' }
        const loginStateAfter = loginReducer(
            loginState as LoginSchema,
            loginActions.setPassword('qwerty')
        )
        expect(loginStateAfter.password).toBe('qwerty')
    })

    it('setIsLoading', () => {
        const loginState: DeepPartial<LoginSchema> = { isLoading: false }
        const loginStateAfter = loginReducer(
            loginState as LoginSchema,
            loginActions.setIsLoading(true)
        )
        expect(loginStateAfter.isLoading).toBeTruthy()
    })

    it('setError', () => {
        const loginState: DeepPartial<LoginSchema> = { error: '' }
        const loginStateAfter = loginReducer(
            loginState as LoginSchema,
            loginActions.setError('Your password or username is wrong')
        )
        expect(loginStateAfter.error).toBe('Your password or username is wrong')
    })

    it('setAll', () => {
        const loginState: LoginSchema = {
            username: '',
            password: '',
            isLoading: false
        }

        let loginStateAfter = loginReducer(
            loginState,
            loginActions.setUsername('Sergio')
        )
        loginStateAfter = loginReducer(
            loginStateAfter,
            loginActions.setPassword('qwerty')
        )
        loginStateAfter = loginReducer(
            loginStateAfter,
            loginActions.setIsLoading(true)
        )
        loginStateAfter = loginReducer(
            loginStateAfter,
            loginActions.setError('Your password or username is wrong')
        )

        expect(loginStateAfter).toStrictEqual({
            username: 'Sergio',
            password: 'qwerty',
            isLoading: true,
            error: 'Your password or username is wrong'
        })
    })
})
