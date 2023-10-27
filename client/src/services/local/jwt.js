import { LocalStorageService } from "./base.localstorage";

const USER_KEY = 'user';

export const jwtService = {
    saveUser(user) {
        LocalStorageService.set(USER_KEY, JSON.stringify(user))
    },
    getUser() {
        return JSON.parse(LocalStorageService.get(USER_KEY))
    },
    saveToken(token) {
        LocalStorageService.set('token', token)
    },
    getToken() {
        const token = LocalStorageService.get('token');
        return token ? token : null
    }
}