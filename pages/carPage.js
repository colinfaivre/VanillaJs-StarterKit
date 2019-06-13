const carPage = (function(car) {
    'use strict'

    const carPageElement = document.getElementById('car-page')

    function kill() {
        carPageElement.innerHTML = ''
    }

    function render(car) {
        carPageElement.innerHTML = 
        `
            <div class="car-photo ${car.photo}">
                <div class="photo-header">
                    <div class="photo-header-left">
                        <span>${car.make}</span>
                        <span>${car.model}</span>
                        <div class="car-info"><i class="material-icons">calendar_today</i>${car.year}</div>
                        <div class="car-info"><i class="material-icons">assessment</i>${car.weight}</div>
                    </div>
                    <div class="photo-header-right">
                        <span>${car.needsMaintenance ? '<i class="material-icons">warning</i>' : '<i class="material-icons">done</i>'}</span>
                        <span>${car.tripsSinceMaintenance}</span>
                    </div>
                </div>
            </div>
            <div class="test">
                <div>
                ${car.isDriving ?
                '<div>Your\'re driving your car</div>' :
                '<div>Your car is parked</div>'
                }
                </div>
            </div>
            <br>
            ${car.isDriving ?
            '<button id="stop-button" class="bottom-right-button"><i class="material-icons">store</i></button>' :
            '<button id="drive-button" class="bottom-right-button"><i class="material-icons">directions_car</i></button>'}
            <br>
            <button id="repair-button" class="bottom-left-button"><i class="material-icons">build</i></button><br>
        `

        const driveButtonElement = document.getElementById('drive-button')
        const stopButtonElement = document.getElementById('stop-button')
        const repairButtonElement = document.getElementById('repair-button')

        if (driveButtonElement) {
            driveButtonElement.addEventListener('click', () => drive(car))
        }
        if (stopButtonElement) {
            stopButtonElement.addEventListener('click', () => stop(car))
        }
        repairButtonElement.addEventListener('click', () => repair(car))
    }

    function drive(car) {
        car.drive()
        render(car)
    }
    function stop(car) {
        car.stop()
        render(car)
    }
    function repair(car) {
        car.repair()
        render(car)
    }

    return {
        kill: kill,
        render: render,
    }
}())