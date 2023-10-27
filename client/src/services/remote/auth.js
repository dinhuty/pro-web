import AxiosService from "../axios";

export const AuthAxiosService = {
    login(data) {
        return AxiosService.post('user/signin', data);
    },
};