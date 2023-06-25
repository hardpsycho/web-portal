import { createSelector } from '@reduxjs/toolkit'
import { UserStateSchema } from '../../types/userStateSchema'
import { getUserState } from '../getUserState/getUserState'

export const getUserAuth = createSelector(
    getUserState,
    (state: UserStateSchema) => state.isAuth
)
