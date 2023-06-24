import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter: FC = () => {
    console.log('render counter')
    const dispatch = useDispatch()
    const value: number = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button square={true} onClick={increment} data-testid="increment">
                +
            </Button>
            <Button square={true} onClick={decrement} data-testid="decrement">
                -
            </Button>
        </div>
    )
}
