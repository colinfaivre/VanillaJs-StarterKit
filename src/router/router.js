import myComponent from '../components/navbarComponent'
import myPage from '../pages/myPage'

export default function router() {
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
    function goToMyPage() {
        // otherPage.kill()
        setCurrentRoute('my-page')
        myComponent().render()
        myPage().render()
    }
    return {
        goToMyPage: goToMyPage,
        getCurrentRoute: getCurrentRoute,
    }
}