import css from './Post.module.css'

const Post = ({post,postInfo}) => {
   const {id, title} = post

    return (
        <div className={css.Post}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=> postInfo(post)}>Detail Info</button>
        </div>
    );
 }
export {Post};