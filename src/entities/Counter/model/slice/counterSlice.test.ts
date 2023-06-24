import { DeepPartial } from '@reduxjs/toolkit'
import { CounterSchema } from '../types/counterSchema'
import { counterReducer, counterActions } from './counterSlice'

describe('counterSlice', () => {
    it('increment', () => {
        const counter: DeepPartial<CounterSchema> = { value: 100 }
        const counterAfter = counterReducer(
            counter as CounterSchema,
            counterActions.increment()
        )
        expect(counterAfter.value).toStrictEqual(101)
    })

    it('decrement', () => {
        const counter: DeepPartial<CounterSchema> = { value: 100 }
        const counterAfter = counterReducer(
            counter as CounterSchema,
            counterActions.decrement()
        )
        expect(counterAfter.value).toStrictEqual(99)
    })

    it('work with empty state', () => {
        const counterAfter = counterReducer(
            undefined,
            counterActions.increment()
        )
        expect(counterAfter.value).toStrictEqual(1)
    })
})
