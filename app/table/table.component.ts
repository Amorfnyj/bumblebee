import { Component, OnInit } from '@angular/core';
import {Table} from "../_models/table";
import {Order} from "../_models/order";

@Component({
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})

export class TableComponent {
    orders: Order[];
    name: string;
    orderArticles: string[];

    constructor() {
        this.orders = [new Order('Marek', 3),
        new Order('Magda', 2),
        new Order('Kamil', 3),
            new Order('Marek1', 3),
            new Order('Magda1', 2),
            new Order('Kamil1', 3),
            new Order('Marek2', 3),
            new Order('Magda2', 2),
            new Order('Kamil2', 3)]
        this.name = null;
    }

    onRowSelect(order: Order) {
        this.setOrder(order);
        /*this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand}); */
    }

    setOrder(order: Order) {
        this.name = order.name + ':';
        let i = this.orders.indexOf(order);
        this.orderArticles = this.orders[i].orderArticles;
    }
}