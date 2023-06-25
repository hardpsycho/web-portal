export interface UserInfo {
    id: number
    name: string
}

export interface UserStateSchema {
    isAuth: boolean
    userInfo: UserInfo
}
