import {useEffect, useState} from "react";
import {getService} from "../../../services/getService";
import {Comment} from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(()=>{
        getService.getAllComments().then(({data})=> setComments(data))
    },[])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};