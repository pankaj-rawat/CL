namespace Model {
    export interface City {
        id: number;
        name: string;
        state: State;
    }
    export interface Country {
        id: number;
        name: string;
        abbr: string;
    }

    export interface State {
        id: number;
        name: string;
        country: Country;
        abbr: string;
    }
}