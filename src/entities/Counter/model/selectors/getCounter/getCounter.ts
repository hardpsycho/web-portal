import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { CounterSchema } from '../../types/counterSchema'

export function getCounter(state: StateSchema): CounterSchema {
    return state.counter
}
