export interface UserModel{
    id?:number;
    email: string;
    password?: number;
    phoneLandLine?: number;
    phoneCell?: number;   
    idStatus?: number;
    idCity: number;
    createdOn?: Date;
    lastupdatedOn?: Date;
    subscriptionOptIn: boolean;
    subscriptionOptInDate?: Date;
    subscriptionOptOutDate?: Date;
}