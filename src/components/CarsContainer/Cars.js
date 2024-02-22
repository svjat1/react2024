import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "./Car";
import {useAppContext} from "../../hooks/useAppContext";

const Cars = () => {
    const [cars, setCars] = useState([])
  const {trigger} = useAppContext()

    useEffect(()=>{
        carService.getAll().then(({data})=>{
            setCars(data.items)
        })
    }, [trigger])
    return (
        <div>
            {cars.map(car => <Car key={car.id}  car={car}/>)}
        </div>
    );
};

export {Cars};