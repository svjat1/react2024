import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getById:(id)=> apiService.get(urls.characters.byId(id))
}

export {
    characterService
}