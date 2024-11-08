class Car {
  make: String;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(currentYear = new Date().getFullYear()): number {
    return currentYear - this.year;
  }
}


const car = new Car("toyota", "A03-Corola", 1997)

console.log(car.getCarAge())