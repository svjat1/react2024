import {useEffect, useState} from "react";
import {axiosService, urls} from "../../servises/axiosService";
import {Post} from "../Post/Post";
import {postsService} from "../../servises/postsService";
import {UserPosts} from "../UserPosts/UserPosts";
import css from './Posts.module.css'

const Posts = () => {

const [posts, setPosts]= useState([])
const [postsInfo, setPostsInfo] = useState(null)

    useEffect(()=>{
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])

    const postInfo= (post)=>{
        setPostsInfo(post)
    }

    return (
        <div className={css.Main}>
            <div className={css.Posts}>
            {posts.map(post => <Post key={post.id} post={post}  postInfo={postInfo}/>)}
            </div>
            <hr/>
            {postsInfo && <UserPosts postsInfo={postsInfo}/>}
        </div>
    );
};

export {Posts};