import {timestamp} from "rxjs/operator/timestamp";
export class Order {
    name: string;
    numberOfGuests: number;
    date: any;
    orderArticles: string[];
    cost: number;
    restaurantName: string;

    constructor(name: string, numberOfGuests: number) {
        this.name = name;
        this.numberOfGuests = numberOfGuests;
        this.date = new Date();
        this.orderArticles = ['Żurek',
                              'Coca-cola',
                              'pizza'];
        this.cost = 45;
        this.restaurantName = 'Długi Trzmiel 1, Warszawa, Nowaka-Jezioranskiego 10'
    }

}