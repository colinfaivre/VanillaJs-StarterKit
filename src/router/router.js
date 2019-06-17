import {myComponent} from '../components/navbarComponent'
import {myPage} from '../pages/myPage'

export const router = {
    currentRoute: '',
    setCurrentRoute: (routeName) => {
        router.currentRoute = routeName
    },
    getCurrentRoute: () => {
        return router.currentRoute
    },
    goToMyPage: () => {
        // otherPage.kill()
        router.setCurrentRoute('my-page')
        myComponent.render()
        myPage.render()
    }
}