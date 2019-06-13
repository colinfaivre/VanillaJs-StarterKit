const navbarComponent = (function () {
    'use strict'

    const navbarElement = document.getElementById('navbar-component')

    function kill() {
        navbarElement.innerHTML = ''
    }

    function render() {
        navbarElement.innerHTML =
        `
            <div class="nav-left">
                MyGarage
            </div>
            <div class="nav-right">
                <div
                    id="car-1-button"
                    ${router.getCurrentRoute() === 'car-1' ?
                    'class="car-button current-route"' :
                    'class="car-button"'}
                >
                    Car 1
                </div>

                <div
                    id="car-2-button"
                    ${router.getCurrentRoute() === 'car-2' ?
                    'class="car-button current-route"' :
                    'class="car-button"'}
                >
                    Car 2
                </div>

                <div
                    id="car-3-button"
                    ${router.getCurrentRoute() === 'car-3' ?
                    'class="car-button current-route"' :
                    'class="car-button"'}
                >
                    Car 3
                </div>
            </div>
        `
        var car1ButtonElement = document.getElementById('car-1-button')
        var car2ButtonElement = document.getElementById('car-2-button')
        var car3ButtonElement = document.getElementById('car-3-button')

        car1ButtonElement.addEventListener('click', () => router.goToCar1Page())
        car2ButtonElement.addEventListener('click', () => router.goToCar2Page())
        car3ButtonElement.addEventListener('click', () => router.goToCar3Page())
    }

    return {
        kill: kill,
        render: render,
    }
}())