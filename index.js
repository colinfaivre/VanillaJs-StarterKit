class Vehicule {
    constructor(make, model, year, weight, photo) {
        this.make = make
        this.model = model
        this.year = year
        this.weight = weight
        this.photo = photo
        this.needsMaintenance = false
        this.tripsSinceMaintenance = 0
    }
    repair() {
        this.tripsSinceMaintenance = 0
        this.needsMaintenance = false
    }
}

class Car extends Vehicule {
    constructor(make, model, year, weight, photo) {
        super(make, model, year, weight, photo)
        this.isDriving = false
    }
    drive() {
        this.isDriving = true
    }
    stop() {
        this.isDriving = false
        this.tripsSinceMaintenance += 1
        if (this.tripsSinceMaintenance > 10) {
            this.needsMaintenance = true
        }
    }
}

let car1 = new Car("BATMAN", "Batmobile", 1989, "3,170 lbs", "bat-mobile")
let car2 = new Car("ASTON MARTIN", "DB5", 1960, "3,311 lbs", "bond-mobile")
let car3 = new Car("PONTIAC", "Firebird", 1982, "3,080 lbs", "kitt")

console.log(car1)