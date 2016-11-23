import { Component, Input } from '@angular/core';
import {Order} from "../_models/order";


@Component({
    moduleId: module.id,
    templateUrl: 'amount.component.html',
    styleUrls: ['amount.component.css']
})

export class AmountComponent {
    order: Order[];

    constructor() {
        this.order = [new Order('Marek', 4)];
    }

}


