export interface IUserRepository {
    find(id: number): Model.User;
    create(user: Model.User): number;
    update(user: Model.User): Model.User;
   remove(id: number): number;
   getAll(): Model.User[];
}