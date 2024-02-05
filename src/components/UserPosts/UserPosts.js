import css from './UserPosts.module.css'
const UserPosts = ({postsInfo}) => {
    const {userId,id,title,body} = postsInfo

    return (
        <div className={css.UserPosts}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {UserPosts};