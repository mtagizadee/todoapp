import {apiBaseURL} from "./auth-service";
import helpers from "../helpers";
import axios from "axios";

export class TodosService {
    static url = apiBaseURL + 'todos';

    static getConfig(token) {
        return { headers: helpers.generateAuthHeader(token) }
    }

    static async create(token, dto) {
        const config = TodosService.getConfig(token);
        return await axios.post(TodosService.url,dto,config);
    }

    static async update(token, dto) {
        const config = TodosService.getConfig(token);
        return await axios.put(TodosService.url,dto,config);
    }

    static async delete(token) {
        const config = TodosService.getConfig(token);
        return await axios.delete(TodosService.url,config);
    }
}