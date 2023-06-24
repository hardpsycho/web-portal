import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
    it('get counter value', () => {
        const state: DeepPartial<StateSchema> = { counter: { value: 100 } }
        const counterValue = getCounterValue(state as StateSchema)
        expect(counterValue).toStrictEqual(100)
    })
})
