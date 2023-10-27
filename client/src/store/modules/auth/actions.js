import { AuthAction } from "./types.action"
import { AuthAxiosService } from "@/services/remote/auth"

const actions = {
    [AuthAction.remote.LOGIN](context, data) {
        return new Promise((resolve, reject) => {
            AuthAxiosService.login(data)
                .then(res => {
                    context.commit(AuthAction.local.SET_USER, res.data)
                    context.commit(AuthAction.local.IS_LOGGED_IN, true)
                    resolve(res.data);
                }).catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }
}
export default actions