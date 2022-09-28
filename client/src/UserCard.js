import { useState } from "react";


function UserCard({user, currentUser, setCurrentUser}){
   

    const [followed, setFollowed] = useState(false)
console.log(currentUser)

    const handleFollow = () => {
        const followData = {
            follower_id: currentUser.id,
            followed_user_id: user.id
        }

            fetch('/follows', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(followData), 
            })
            .then((resp) => resp.json())
            .then((info) => console.log(info)
            )
            setFollowed(true)
            
    }
    
    return(

        
        <div>
          <h6>Name: {user.name}</h6>
          <h6>Username: {user.username}</h6>
          <button onClick={handleFollow}>Follow</button>
        </div>
    )
}

export default UserCard