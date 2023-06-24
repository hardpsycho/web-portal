import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
    it('get counter state', () => {
        const state: DeepPartial<StateSchema> = { counter: { value: 100 } }
        const counterState = getCounter(state as StateSchema)
        expect(counterState).toStrictEqual({ value: 100 })
    })
})
