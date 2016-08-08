import {UserModel} from "../Models/userModel";
export interface IUserRepository {
    find(id: number): UserModel;
    create(user: UserModel): number;
    update(user: UserModel): UserModel;
   remove(id: number): number;
   getAll(): UserModel[];
}