const Character = ({character}) => {

    const {name, age, city} = character
    return (
        <div>
            <div>ID: {name}</div>
            <div>age: {age}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {Character};