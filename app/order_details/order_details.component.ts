import { Component, Input } from '@angular/core';
import {Restaurant} from "../_models/restaurant";
import {OrderArticle} from "../_models/order_article";

@Component({
    moduleId: module.id,
    templateUrl: 'order_details.component.html',
    styleUrls: ['order_details.component.css']
})

export class OrderDetailsComponent {
    restaurant: Restaurant;
    @Input() irestaurant: Restaurant;
    numberOfPeople: number;
    orderArticles: OrderArticle[];
    choosenArticles: OrderArticle[];

    constructor() {
        this.restaurant = new Restaurant('Długi Trzmiel 1', 'Warszawa, Nowaka-Jeziorańskiego 10');
        this.numberOfPeople = 0;
        this.orderArticles = [new OrderArticle('Żurek', 10),
            new OrderArticle('Pizza', 20),
            new OrderArticle('Coca-Cola', 5)
        ]
        this.choosenArticles = [];
    }

    ngOnInit() {
        this.orderArticles = [new OrderArticle('Żurek', 10),
            new OrderArticle('Pizza', 20),
            new OrderArticle('Coca-Cola', 5)
        ]
        this.choosenArticles = [];
    }

    upButton(numberOfPeople: number) {
        if(numberOfPeople < 0) {
            this.numberOfPeople = 0;
        } else if (numberOfPeople >= 10) {
            this.numberOfPeople = 10;
        }else {
            this.numberOfPeople = numberOfPeople;
            this.numberOfPeople++;
        }
    }

    downButton(numberOfPeople: number) {
        if (numberOfPeople <= 0) {
            this.numberOfPeople = 0;
        } else if (numberOfPeople > 10) {
            this.numberOfPeople = 10;
        } else {
            this.numberOfPeople = numberOfPeople;
            this.numberOfPeople--;
        }

    }



}