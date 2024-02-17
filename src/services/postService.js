import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getByUserId:(userId)=>apiService.get(urls.posts.base, {params:{userId}}),
    byId:(id)=> apiService.get(urls.posts.byUserId(id))
}
export {
    postService
}