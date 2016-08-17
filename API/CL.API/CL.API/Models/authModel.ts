export interface AuthModel {
    token: string,
    expires: number,
    user: AuthUsermodel
}

export interface AuthUsermodel {
    name: string,
    userName: string,
    roles: string[]
}