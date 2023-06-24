import { createSelector } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { CounterSchema } from '../../types/counterSchema'
import { getCounter } from '../getCounter/getCounter'

export type getCounterValueType = (state: StateSchema) => CounterSchema['value']

export const getCounterValue: getCounterValueType = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)
