import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getUserInfo } from './getUserInfo'

describe('getUserInfo', () => {
    it('get user info', () => {
        const state: DeepPartial<StateSchema> = {
            user: { isAuth: true, userInfo: { id: 1, name: 'Vasya' } }
        }
        const userInfo = getUserInfo(state as StateSchema)
        expect(userInfo).toStrictEqual({ id: 1, name: 'Vasya' })
    })

    it('get user name wrong', () => {
        const state: DeepPartial<StateSchema> = {
            user: { isAuth: true, userInfo: { id: 1, name: 'Vasya' } }
        }
        const userInfo = getUserInfo(state as StateSchema)
        expect(userInfo).not.toStrictEqual({ id: 22, name: 'Vasya' })
    })

    it('get user name', () => {
        const state: DeepPartial<StateSchema> = {
            user: { isAuth: true, userInfo: { id: 1, name: 'Vasya' } }
        }
        const userInfo = getUserInfo(state as StateSchema)
        expect(userInfo.name).toStrictEqual('Vasya')
    })
})
