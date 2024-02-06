import {axiosService, urls} from "./axiosService";

const launchesService = {
    getAll:()=> axiosService.get(urls.launches)
}

export {launchesService}