import { Component, EventEmitter, Output } from '@angular/core';
import {Restaurant} from "../_models/restaurant";

@Component({
    moduleId: module.id,
    templateUrl: 'restaurant_choice.component.html',
    styleUrls: ['restaurant_choice.component.css']
})

export class RestaurantChoiceComponent {
    restaurantArray: Restaurant[];
    restaurant: Restaurant;
    rowToggled: boolean;
    @Output() choosed: EventEmitter<Restaurant>;

    constructor() {
        this.restaurantArray = [new Restaurant('Długi Trzmiel 1', 'Warszawa, Nowaka-Jeziorańskiego 10'),
            new Restaurant('Długi Trzmiel 2', 'Warszawa, Waryńskiego 12'),
            new Restaurant('Długi Trzmiel 3', 'Warszawa, Księcia Janusza 43'),
            new Restaurant('Długi Trzmiel 4', 'Warszawa, Aleje Jerozolimskie 67'),
            new Restaurant('Długi Trzmiel 5', 'Warszawa, Jana Pawła II 154'),
            new Restaurant('Długi Trzmiel 6', 'Warszawa, Marszałkowska 10'),
            new Restaurant('Długi Trzmiel 6', 'Warszawa, Marszałkowska 10'),
            new Restaurant('Długi Trzmiel 6', 'Warszawa, Marszałkowska 10'),
            new Restaurant('Długi Trzmiel 6', 'Warszawa, Marszałkowska 10'),
            new Restaurant('Długi Trzmiel 6', 'Warszawa, Marszałkowska 10'),
            new Restaurant('Długi Trzmiel 6', 'Warszawa, Marszałkowska 10'),
            new Restaurant('Długi Trzmiel 6', 'Warszawa, Marszałkowska 10')]
        this.rowToggled = false;
        this.choosed = new EventEmitter<Restaurant>();
    }

    onRowSelect(restaurant: Restaurant) {
        console.log(restaurant.name);
        this.rowToggled = true;
        let i = this.restaurantArray.indexOf(restaurant);
        this.restaurant = this.restaurantArray[i];
    }

    onRestaurantChoosed() {
        this.choosed.emit(this.restaurant);
    }

}