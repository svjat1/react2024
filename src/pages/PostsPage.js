import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {getService} from "../services/getService";
import {Post} from "../components/Container/PostContainer/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState(null)
    const {state:{postId}} = useLocation()

    useEffect(()=>{
        getService.getPostById(postId).then(({data})=> setPosts(data))
    },[postId])

    return (
        <div>
            {posts && <Post posts={posts}/>}
        </div>
    );
};

export {PostsPage};