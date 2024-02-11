import {apiService} from "./apiService";
import {urls} from "../constants/Urls";


const commentsService = {
    getAll: ()=> apiService.get(urls.comments),
    create: (data)=> apiService.post(urls.comments, data)
}

export {
    commentsService
}