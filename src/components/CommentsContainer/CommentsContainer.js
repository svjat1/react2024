import {useEffect, useState} from "react";

import {commentsService} from "../../services/CommentsService";
import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
              commentsService.getAll().then(({data})=> setComments(data))
    }, [])


    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};