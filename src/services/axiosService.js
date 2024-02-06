import axios from "axios";
import {baseURL} from "../constants/urls/urls";

const axiosService = axios.create({baseURL})

const launches = '/launches'

const urls = {
    launches
}

export {
    axiosService, urls
}