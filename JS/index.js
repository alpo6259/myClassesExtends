`use strict`;

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = new Date(manufactureDate);
  }
  getMaxSise() {
    const max = Object.values(this.dimensions).reduce((pre, curr) =>
      pre > curr ? pre : curr
    );
    return max;
  }

  getAge() {
    return new Date().getFullYear() - this.manufactureDate.getFullYear();
  }
}

const bus1 = new Vehicle(
  { length: 20, height: 3, widths: 100 },
  "MAN",
  "K20",
  "2021, 11, 17"
);

const bus2 = new Vehicle(
  { length: 20, height: 30, widths: 1 },
  "MAN",
  "K20",
  "2021, 11, 17"
);

console.log("bus1 :>> ", bus1);

console.log(bus1.getMaxSise());
console.log(bus1.getAge());

console.log(bus2.getMaxSise());

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit = 18,
    passengerCount = 0
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    if (this.passengerCount !== this.passengerLimit) {
      this.passengerCount++;
      return true;
    } else return false;
  }
}

const marshrutka = new PassengerTransport(
  { length: 3, height: 2, widths: 1.5 },
  "bmv",
  "m1",
  "1993,12,21",
  4
);

console.log(marshrutka);

console.log(marshrutka.getMaxSise());
console.log(marshrutka.getAge());
//
console.log(marshrutka.addPassenger());
console.log(marshrutka.addPassenger());
console.log(marshrutka.addPassenger());
console.log(marshrutka.addPassenger());
//
console.log(marshrutka.addPassenger());
console.log(marshrutka.addPassenger());

console.log(marshrutka);

class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return weight <= this.capacity;
  }
}

const trolleyBus = new FreightTransport(
  { length: 10, height: 3, widths: 3 },
  "porshe",
  "911",
  "2010,3,14",
  500
);

console.log(trolleyBus);

console.log(trolleyBus.getMaxSise());
console.log(trolleyBus.getAge());

console.log(trolleyBus.checkLoadingPossibility(400));

console.log(trolleyBus.checkLoadingPossibility(600));

console.log(trolleyBus.checkLoadingPossibility(500));
