function FollowingCard({name, username}){

    const handleUnfollow = () => {
        
    }


    return (
        <div>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <button onClick={handleUnfollow}>Unfollow</button>
        </div>
    )
}

export default FollowingCard