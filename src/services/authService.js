import {apiService} from "./apiService";
import {urls} from "../constants";

const tokenKey = 'token'


const authService = {
    register(data) {
        return apiService.post(urls.auth.register, data)
    },
    async login(user) {
        const {data} = await apiService.post(urls.auth.login, user)
        console.log(data);
    },
    me() {
        return apiService.get(urls.auth.me)
    }
    ,
    setToken(token) {
        localStorage.setItem(tokenKey, token)
    },
    getToken() {
        return localStorage.getItem(tokenKey)
    },
    deleteToken() {
        localStorage.removeItem(tokenKey)
    }
}
export{
    authService
}