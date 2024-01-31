import {Simpson} from "./Simpson";
import './Simpsons.css'
const Simpsons = () => {
    const simpsons = [
        { id: 1, name: "Homer", age: 39, img: 'https://pngimg.com/d/simpsons_PNG94.png'},
        { id: 2, name: "Marge", age: 36, img: 'https://pngimg.com/d/simpsons_PNG57.png' },
        { id: 3, name: "Bart", age: 10, img: 'https://pngimg.com/d/simpsons_PNG93.png' },
        { id: 4, name: "Lisa", age: 8, img: 'https://pngimg.com/d/simpsons_PNG49.png' },
        { id: 5, name: "Maggie", age: 1, img: 'https://www.freeiconspng.com/thumbs/maggie-simpson-png/maggie-simpson-png-12.png' }
    ];
    return (
        <div>
            {simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};