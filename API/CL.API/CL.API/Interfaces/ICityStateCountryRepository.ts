///reference<path='../Model/citystatecountry.ts'/>
namespace CityStateCountry {
    export interface ICountryRepository {
        find(id: number): Model.Country;
        getAll(): Model.Country[];
    }

    export interface ICityRepository {
        find(id: number): Model.City;
        getAll(): Model.City[];
    }
    export interface IStateRepository {
        find(id: number): Model.State;
        getAll(): Model.State[];
    }
}