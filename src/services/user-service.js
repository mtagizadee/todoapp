import {apiBaseURL} from "./auth-service";
import helpers from "../helpers";
import axios from "axios";

export class UserService {
    static async delete(token) {
        const url = apiBaseURL + 'users';
        const config = { headers: helpers.generateAuthHeader(token) };
        return await axios.delete(url,config);
    }

    static async update(token,dto) {
        const url = apiBaseURL + 'users';
        const config = { headers: helpers.generateAuthHeader(token) };
        return await axios.put(url,dto,config);
    }
}