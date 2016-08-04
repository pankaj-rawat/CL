//import repo = require('../Interfaces/ICityStateCountryRepository');
/// <reference path="../Interfaces/ICityStateCountryRepository.ts" />

import dbAccess = require('../dbConnect');

class CityRepository implements CityStateCountry.ICityRepository {

    find(id: number): Model.City {
        var city: Model.City =
            {
                id: 1,
                name: 'Haldwani',
                state: {
                    id: 1,
                    name: 'Uttarakhand',
                    abbr: 'UK',
                    country: {
                        id: 1,
                        name: 'India',
                        abbr: 'IN'
                    }
                }
            };
        return city;
    }

    getAll(): Model.City[] {
        //var a: dbAccess.IDBLayer = dbAccess.Connect();
        //if (a.err == undefined) {
        //    a.connection.query("");
        //}
        var cities = [];
        //var user: userModel.User = { salutation: "Mr.", name: "Raw", age: 10 };
        //users.push(user);
        //var user: userModel.User = { salutation: "Mrs.", name: "Raw11", age: 39 };
        //users.push(user);
        return cities;
    }
};

class StateRepository implements CityStateCountry.IStateRepository {

    find(id: number): Model.State {
        var state: Model.State =
            {
                id: 1,
                name: 'Uttarakhand',
                abbr: 'UK',
                country: { id: 1, abbr: 'IN', name: 'India' }                
            };
        return state;
    }

    getAll(): Model.State[] {
        //var a: dbAccess.IDBLayer = dbAccess.Connect();
        //if (a.err == undefined) {
        //    a.connection.query("");
        //}
        var states = [];
        //var user: userModel.User = { salutation: "Mr.", name: "Raw", age: 10 };
        //users.push(user);
        //var user: userModel.User = { salutation: "Mrs.", name: "Raw11", age: 39 };
        //users.push(user);
        return states;
    }
};

class CountryRepository implements CityStateCountry.ICountryRepository {

    find(id: number): Model.Country {
        var country: Model.Country =
            {
                id: 1,
                name: 'India',
                abbr:'IN'                
            };
        return country;
    }

    getAll(): Model.Country[] {
        //var a: dbAccess.IDBLayer = dbAccess.Connect();
        //if (a.err == undefined) {
        //    a.connection.query("");
        //}
        var countries = [];
        //var user: userModel.User = { salutation: "Mr.", name: "Raw", age: 10 };
        //users.push(user);
        //var user: userModel.User = { salutation: "Mrs.", name: "Raw11", age: 39 };
        //users.push(user);
        return countries;
    }
};

export {CityRepository as cityRepository };
export {StateRepository as stateRepository };
export {CountryRepository as countryRepository };