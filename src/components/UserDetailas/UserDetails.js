// import {Recurs} from "./Recurs";
// import css from './UserDetails.module.css'  це була спроба відображати дані через рекурсію, але тоді кнопка відмалювавлся щоразу коли викликалася рекурсія.
import {useNavigate} from "react-router-dom";

const UserDetails = ({ details }) => {
    const { id, name, username, email, address, phone, website, company} = details
    const navigatePost = useNavigate()
    return (
        <div>
            <h3>--------User Details---------</h3>
            <div><strong>id:</strong> {id}</div>
            <div><strong>name:</strong> {name}</div>
            <div><strong>username:</strong> {username}</div>
            <div><strong>email:</strong>  {email}</div>
            <div><strong>address.street:</strong> {address.street}</div>
            <div><strong>address.suite:</strong> {address.suite}</div>
            <div><strong>address.city:</strong> {address.city}</div>
            <div><strong>address.zipcode:</strong> {address.zipcode}</div>
            <div><strong>address.geo.lat:</strong> {address.geo.lat}</div>
            <div><strong>address.geo.lng:</strong> {address.geo.lng}</div>
            <div><strong>phone:</strong> {phone}</div>
            <div><strong>website:</strong> {website}</div>
            <div><strong>company.name:</strong> {company.name}</div>
            <div><strong>company.catchPhrase:</strong> {company.catchPhrase}</div>
            <div><strong>company.bs:</strong> {company.bs}</div>
            <button onClick={()=> navigatePost('posts', {state:{id}})}>Pst of current user</button>
        </div>
    );
};

export {UserDetails};