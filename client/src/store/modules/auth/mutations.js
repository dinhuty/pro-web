import { AuthAction } from "./types.action"
import { jwtService } from "@/services/local/jwt"
const mutations = {
    [AuthAction.local.SET_USER](state, data) {
        jwtService.saveUser(data.user)
        jwtService.saveToken(data.token)
        state.isLoggedIn = true
        state.user = data.user
    },
    [AuthAction.local.IS_LOGGED_IN](state, boolean) {
        state.isLoggedIn = boolean;
    }
}
export default mutations