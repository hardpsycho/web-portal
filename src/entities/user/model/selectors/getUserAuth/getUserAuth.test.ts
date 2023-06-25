import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getUserAuth } from './getUserAuth'

describe('getUserAuth', () => {
    it('get user auth', () => {
        const state: DeepPartial<StateSchema> = {
            user: { isAuth: true, userInfo: { id: 1, name: 'Vasya' } }
        }
        const userAuth = getUserAuth(state as StateSchema)
        expect(userAuth).toStrictEqual(true)
    })

    it('get user auth wrong', () => {
        const state: DeepPartial<StateSchema> = {
            user: { isAuth: true, userInfo: { id: 1, name: 'Vasya' } }
        }
        const userAuth = getUserAuth(state as StateSchema)
        expect(userAuth).not.toStrictEqual(false)
    })
})
