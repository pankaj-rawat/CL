import * as model from "../Models/userModel";

export interface IUserRepository {
    find(id: number,res:(res:model.UserModel)=>void): void;
    create(user:model.UserModel,res:(res:model.UserModel)=>void): void;
    update(user:model.UserModel,res:(res:model.UserModel)=>void): void;
    remove(id:number, res: (res: model.UserModel) => void): void;
}