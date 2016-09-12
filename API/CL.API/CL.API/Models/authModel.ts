export interface AuthModel {
    token: string,
    expires: number,
    user: AuthUsermodel
}

export interface AuthUsermodel {
    id:number,
    userName: string,
    roles: Array<number>
}