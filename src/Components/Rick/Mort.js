const Mort = ({character}) => {
    const {id, name, status, species,gender, image} = character;
    return (
        <div>
            <div>ID: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Mort};