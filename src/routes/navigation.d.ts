import { AppScreens } from './app.routers'
import { AuthScreens } from './auth.routes'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AuthScreens, AppScreens {}
    }
}