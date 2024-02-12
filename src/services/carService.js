import {apiService} from "./apiService";
import {urls} from "../constants/Urls";

const carService = {
    getAll: ()=> apiService.get(urls.cars.base),
    create:(data)=> apiService.post(urls.cars.base, data),
    updateById:(id, data)=> apiService.patch(urls.cars.byId(id), data),
    deleteById:(id)=> apiService.delete(urls.cars.byId(id))
}

export {
    carService
}