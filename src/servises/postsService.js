import {axiosService, urls} from "./axiosService";

const postsService ={
    getAll:()=> axiosService(urls.posts.base),
    getById:(id)=>axiosService(urls.posts.byId(id))
}

export {
    postsService
}