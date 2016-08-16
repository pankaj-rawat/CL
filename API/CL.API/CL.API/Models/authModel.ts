export interface AuthModel {
    token: string,
    expires: Date,
    user: AuthUsermodel
}

export interface AuthUsermodel {
    name: string,
    userName: string,
    roles: string[]
}