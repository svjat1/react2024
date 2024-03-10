import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPagination = () => {
    const {prev, next} = useSelector(state => state.episodes)
    const [, setQuery] = useSearchParams({page: '1'})

    const prevPage = ()=>{
        setQuery(prev => {
            prev.set('page', `${+prev.get("page") -1}`)
            return prev
        })
    }
    const nextPage = ()=>{
        setQuery(prev => {
            prev.set('page', `${+prev.get("page") +1}`)
            return prev
        })
    }

    return (
        <div>
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>
        </div>
    );
};

export {EpisodesPagination};