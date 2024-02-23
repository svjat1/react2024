import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "./Car";
import {useAppContext} from "../../hooks/useAppContext";
import {useSearchParams} from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [query, setQuery] = useSearchParams({page: '1'})
    const [prevNext, setPrevNext] = useState({prev: null, next: null})
    const {trigger} = useAppContext()

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data}) => {
            setCars(data.items)
            setPrevNext({prev: data.prev, next: data.next})
        })
    }, [trigger, query.get('page'), query])

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
            <button disabled={!prevNext.prev} onClick={prev}>Prev PAge</button>
            <button disabled={!prevNext.next} onClick={next}>Next PAge</button>
        </div>
    );
};

export {Cars};