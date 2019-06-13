const router = (function () {
    'use strict'

    // PRIVATE
    var currentRoute = ''
    function setCurrentRoute(routeName) {
        currentRoute = routeName
    }

    // PUBLIC
    function getCurrentRoute() {
        return currentRoute
    }
    function goToCar1Page() {
        carPage.kill()
        setCurrentRoute('car-1')
        navbarComponent.render()
        carPage.render(car1)
    }
    function goToCar2Page() {
        carPage.kill()
        setCurrentRoute('car-2')
        navbarComponent.render()
        carPage.render(car2)
    }
    function goToCar3Page() {
        carPage.kill()
        setCurrentRoute('car-3')
        navbarComponent.render()
        carPage.render(car3)
    }
    return {
        goToCar1Page: goToCar1Page,
        goToCar2Page: goToCar2Page,
        goToCar3Page: goToCar3Page,
        getCurrentRoute: getCurrentRoute,
    }
}())

router.goToCar1Page()