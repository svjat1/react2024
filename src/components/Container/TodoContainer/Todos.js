import {useEffect, useState} from "react";

import {getService} from "../../../services/getService";
import {Todo} from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        getService.getAllTodos().then(({data})=> setTodos(data))
    },[])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    );
};

export {Todos};