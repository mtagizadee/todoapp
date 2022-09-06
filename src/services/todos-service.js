import {apiBaseURL} from "./auth-service";
import helpers from "../helpers";
import axios from "axios";

export class TodosService {
    static url = apiBaseURL + 'todos';

    static generateIdUrl(id) {
        return TodosService.url + `/${id}`;
    }

    static getConfig(token) {
        return { headers: helpers.generateAuthHeader(token) }
    }

    static async create(token, dto) {
        const config = TodosService.getConfig(token);
        return await axios.post(TodosService.url,dto,config);
    }

    static async update(token, dto, id) {
        const config = TodosService.getConfig(token);
        return await axios.put(TodosService.generateIdUrl(id),dto,config);
    }

    static async delete(token, id) {
        const config = TodosService.getConfig(token);
        return await axios.delete(TodosService.generateIdUrl(id),config);
    }
}