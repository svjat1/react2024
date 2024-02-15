import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body}= comment
    const navigate = useNavigate()
    return (
        <div>
            <div>PostId:- {postId}</div>
            <div>Id:- {id}</div>
            <div>Name:- {name}</div>
            <div>Email:- {email}</div>
            <div>Body:- {body}</div>
            <button onClick={()=> navigate('posts', {state:{postId}})}>Post for this comment</button>
            <hr/>
        </div>
    );
};

export {Comment};