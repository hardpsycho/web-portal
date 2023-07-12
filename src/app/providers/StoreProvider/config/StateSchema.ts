import { CounterSchema } from 'entities/Counter'
import { UserStateSchema } from 'entities/user'
import { LoginSchema } from 'features/authByUserName'

export interface StateSchema {
    counter: CounterSchema
    user: UserStateSchema
    login: LoginSchema
}
