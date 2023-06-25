import { createSelector } from '@reduxjs/toolkit'
import { UserStateSchema } from '../../types/userStateSchema'
import { getUserState } from '../getUserState/getUserState'

export const getUserInfo = createSelector(
    getUserState,
    (state: UserStateSchema) => state.userInfo
)
