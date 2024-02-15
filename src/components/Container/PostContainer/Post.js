const Post = ({posts}) => {
    const {userId, id, title, body} = posts
    return (
        <div>
            <hr/>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};