import model = require("../Models/authModel");

export interface IAuthRepository {
    login(userName:string,password:string):Promise<model.AuthModel>;
    validateUser(userName: string, res: (res: model.AuthUsermodel) => void): void; //left intentionaly with callback
}