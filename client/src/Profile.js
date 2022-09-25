
export default function Profile({user}){


    return (
        <div>
            <h1>Profile</h1>
            <h3>Name: {user.name} </h3>
            <h3>Username: {user.username} </h3>
            <h3>Email: {user.email} </h3>
        </div>
    )
}