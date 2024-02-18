import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {UserDetails} from "../components/UserDetailas/UserDetails";
import {userService} from "../services/userService";

const UserDetailsPage = () => {
    const [details, setDetails]= useState(null)
    const {id} = useParams()

    useEffect(()=>{
        userService.byId(id).then(({data})=> setDetails(data))
    },[id]);
    return (
        <div>
            <Outlet/>
            {details && <UserDetails details={details}/>}
        </div>
    );
};

export {UserDetailsPage};