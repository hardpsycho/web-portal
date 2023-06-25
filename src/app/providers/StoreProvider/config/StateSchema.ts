import { CounterSchema } from 'entities/Counter'
import { UserStateSchema } from 'entities/user'

export interface StateSchema {
    counter: CounterSchema
    user: UserStateSchema
}
