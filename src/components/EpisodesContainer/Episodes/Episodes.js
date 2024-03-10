import {useDispatch, useSelector} from "react-redux";
import {Episode} from "./Episode";
import {useEffect} from "react";
import {episodeAction} from "../../../store";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch()
    const [query, setQuery] =useSearchParams({page:'1'})
    const page = query.get('page')

    useEffect(()=>{
        dispatch(episodeAction.getAll({page}))
    },[page])

    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id}  episode={episode}/>)}
        </div>
    );
};

export {Episodes};