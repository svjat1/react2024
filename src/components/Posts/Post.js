import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const navigatePostDetails = useNavigate();
    const {title,id} = post
    return (
        <div>
            <div>TITLE : {title}</div>
            <button onClick={()=>navigatePostDetails(`/posts/${id}`)}>Post-details</button>
            <hr/>
        </div>
    );
};

export {Post};