import {Character} from "./Character";

const Characters = () => {
    const myArray = [
        { name: "John", age: 30, city: "New York" },
        { name: "Alice", age: 25, city: "Los Angeles" },
        { name: "Bob", age: 35, city: "Chicago" }
    ];
    return (
        <div>
            {myArray.map(character => <Character character={character}/>)}
        </div>
    );
};

export {Characters};