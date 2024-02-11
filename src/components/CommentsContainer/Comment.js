const Comment = ({comment}) => {
    const {id, name, email, body}=comment
    return (
        <div>
           <div>ID:{id}</div>
           <div>name:{name}</div>
           <div>email:{email}</div>
           <div>body:{body}</div>
        </div>
    );
};

export {Comment};