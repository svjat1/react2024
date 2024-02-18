import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {UserDetails} from "../components/UserDetailas/UserDetails";
import {userService} from "../services/userService";
import css from "./UserDetailsPage.module.css"

const UserDetailsPage = () => {
    const [details, setDetails]= useState(null)
    const {id} = useParams()

    useEffect(()=>{
        userService.byId(id).then(({data})=> setDetails(data))
    },[id]);
    return (
        <div className={css.UserDetails}>
            {details && <UserDetails details={details}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};