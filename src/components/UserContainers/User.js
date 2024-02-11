const User = ({user}) => {
    const {id, name, username, email} = user

    return (
        <div>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {User};