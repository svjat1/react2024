import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {PostDetails} from "../components/PostDetails/PostDetails";
import {postService} from "../services/postService";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails]= useState([])
    const {id} = useParams()
    useEffect(()=>{
        postService.byId(id).then(({data})=> setPostDetails(data))
    },[id])
    return (
        <div>
            <PostDetails post={postDetails}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};