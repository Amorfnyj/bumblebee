
import random = require("core-js/library/fn/number/random");

export class Restaurant {
    name: string;
    adres: string;
    freePlaces: number;

    constructor(name: string, adres: string) {
        this.name = name;
        this.adres = adres;
        this.freePlaces =  Math.floor(Math.random() * 30) + 0 ;

    }

}