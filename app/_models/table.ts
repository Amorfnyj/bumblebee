export class Table {
    number: number;
    numberOfOrders: number;

    constructor(number: number) {
        this.number = number;
        this.numberOfOrders = number % 3;
    }

    getOrdersNumber() {
        if(this.numberOfOrders === 0) {
            return 'brak';
        } else {
            return this.numberOfOrders + ' zamówień';
        }
    }
}