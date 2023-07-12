import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from './getLoginState'

describe('login selector', () => {
    it('get login state', () => {
        const state: DeepPartial<StateSchema> = {
            login: { username: 'Sergio', password: 'qwerty123' }
        }
        const loginState = getLoginState(state as StateSchema)
        expect(loginState).toStrictEqual({
            username: 'Sergio',
            password: 'qwerty123'
        })
    })
})
