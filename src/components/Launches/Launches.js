import {useEffect, useState} from "react";
import {launchesService} from "../../services/launchesService";
import {Launch} from "../Launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([])
    useEffect(()=>{
        launchesService.getAll().then(({data})=>{
            const filtered = data.filter(launches => launches.launch_year !== '2020')
            setLaunches(filtered)})
    }, [])

    return (
        <div>
            {launches.map(launches=> <Launch key={launches.launch_date_unix} launches={launches}/>)}
        </div>
    );
};

export {Launches};
