export interface UserModel{
    id?:number;
    email: string;
    password: number;
    phoneLanLine?: number;
    phoneCell?: number;   
    idStatus: number;
    idCity: number;
    createdOn?: Date;
    lastupdateOn?: Date;
}