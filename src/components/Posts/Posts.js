import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = () => {
    const [posts ,setPosts] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        postService.getByUserId(id).then(({data})=> setPosts(data))
    },[id])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
};

export {Posts};