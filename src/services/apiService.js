import axios from "axios";

import {baseURL} from "../ulrs/Urls";

const apiService = axios.create({baseURL});



export {
    apiService
}