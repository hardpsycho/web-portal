import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getUserState } from './getUserState'

describe('getUserState', () => {
    it('get user state', () => {
        const state: DeepPartial<StateSchema> = {
            user: { isAuth: true, userInfo: { id: 1, name: 'Vasya' } }
        }
        const userState = getUserState(state as StateSchema)
        expect(userState).toStrictEqual({
            isAuth: true,
            userInfo: { id: 1, name: 'Vasya' }
        })
    })

    it('get user state wrong', () => {
        const state: DeepPartial<StateSchema> = {
            user: { isAuth: true, userInfo: { id: 1, name: 'Vasya' } }
        }
        const userState = getUserState(state as StateSchema)
        expect(userState).not.toStrictEqual({
            isAuth: true,
            userInfo: { id: 1, name: 'Ivan' }
        })
    })
})
