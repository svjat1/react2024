import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=> setCars(data))
    }, [])


    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarContainer};