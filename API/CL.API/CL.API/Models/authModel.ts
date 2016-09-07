export interface AuthModel {
    token: string,
    expires: number,
    user: AuthUsermodel
}

export interface AuthUsermodel {
    userName: string,
    roles: string[]
}