import * as model from "../Models/citystatecountryModel";

export interface ICountryRepository {
    find(id: number, res: (res: model.CountryModel)=>void):void;
    getAll(res: (res: model.CountryModel[]) => void):void;
}

export interface ICityRepository {
    find(id: number, res: (res: model.CityModel) => void):void;
    getAll(res: (res: model.CityModel[]) => void): void;
}
export interface IStateRepository {
    find(id: number, res: (res: model.StateModel) => void): void;
    getAll(res: (res: model.StateModel[]) => void):void;
    }