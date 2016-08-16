import model = require("../Models/authModel");

export interface IAuthRepository {
    login(userName:string,password:string,res:(res:model.AuthModel)=>void):void;
    validateUser(userName: string, res: (res: model.AuthUsermodel) => void): void;
}