import {UserDetails} from "./UserDetails";

const Recurs = (detailsObj) => {
    return (
        <div>
            <ul>
                {Object.entries(detailsObj).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:  </strong>
                        {typeof value === 'object' ? <UserDetails details={value}/> : <span>{value}</span>}
                    </li>))}
            </ul>
        </div>
    );
};

export {Recurs};