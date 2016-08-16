export interface IAuthRepository {
    login(req: any, res: any);
    validate(username: any, password: any);
    validateUser(username: any);
}