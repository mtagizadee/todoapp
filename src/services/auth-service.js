import axios from "axios";
import helpers from "../helpers";

export const apiBaseURL = 'http://localhost:5000/'

export class AuthService {
    static async login(dto) {
        const url = apiBaseURL + 'auth/login';
        return await axios.post(url,dto);
    }

    static async signup(dto) {
        const url = apiBaseURL + 'auth/signup'
        return await axios.post(url,dto);
    }

    static async signOut(token) {
        localStorage.clear();
        const url = apiBaseURL + 'session';
        const config = { headers: helpers.generateAuthHeader(token) }
        await axios.delete(url,config);
    }

    static async getCurrentUser(token) {
        const url = apiBaseURL + 'auth/current-user';
        const config = { headers: helpers.generateAuthHeader(token) }
        return await axios.get(url,config);
    }
}