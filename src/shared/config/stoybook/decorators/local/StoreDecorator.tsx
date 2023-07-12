import { ReactElement } from 'react'
import { DeepPartial } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.scss'

export function StoreDecorator(state: DeepPartial<StateSchema>) {
    return function StoreDecorator(Story: Story): ReactElement {
        return (
            <StoreProvider initialState={state}>
                <Story />
            </StoreProvider>
        )
    }
}
