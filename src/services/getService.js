import {apiService} from "./apiService";
import {urls} from "../ulrs/Urls";

const getService = {
    getAllTodos:()=>apiService.get(urls.todos),
    getAllAlbums:()=> apiService.get(urls.albums),
    getAllComments:()=> apiService.get(urls.comments),
    getPostById: (id)=> apiService.get((urls.posts.byId(id)))
}

export {
    getService
}

// для кожного getAll краще окремий сервіс створювати