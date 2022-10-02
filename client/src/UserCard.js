import { useState } from "react";


function UserCard({user, currentUser, setCurrentUser}){
   

    const [followed, setFollowed] = useState(false)


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
            .then((info) => setCurrentUser(info)
            )
            setFollowed(true)
            
    }
    
    return(

        <a
    class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-700 via-yellow-600 to-red-700"
  ></span>

  <div class="justify-between sm:flex">
    <div>
      <h5 className="text-xl font-bold text-yellow-600">
       Name: {user.name}
      </h5>

      <p class="mt-1 text-md font-medium text-red-700">Username: {user.username}</p>
    </div>

    <div class="ml-3 hidden flex-shrink-0 sm:block">
      <img
        alt={user.name}
        src={user.image}
        class="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div class="mt-4 sm:pr-8">
    {/* <p class="text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p> */}
  </div>

  <dl class="mt-6 flex">
    <div class="flex flex-col-reverse">
    {!followed ? <button onClick={handleFollow}>Follow</button> : <button onClick={handleFollow}>Unfollow</button>}
    </div>

    
  </dl>
</a>

        // <div>
        //   <h6>Name: {user.name}</h6>
        //   <h6>Username: {user.username}</h6>
        //   {!followed ? <button onClick={handleFollow}>Follow</button> : <button onClick={handleFollow}>Unfollow</button>}
        // </div>
    )
}

export default UserCard