"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(currentYear = new Date().getFullYear()) {
        return currentYear - this.year;
    }
}
const car = new Car("toyota", "A03-Corola", 1997);
console.log(car.getCarAge());
