import {useEffect, useState} from "react";

import {getService} from "../../../services/getService";
import {Album} from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(()=>{
        getService.getAllAlbums().then(({data})=> setAlbums(data))
    },[])
    return (
        <div>
            {albums.map(album=> <Album key={album.id} album={album} />)}
        </div>
    );
};

export {Albums};