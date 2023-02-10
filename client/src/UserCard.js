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
    className="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-700 via-yellow-600 to-red-700"
  ></span>

  <div className="justify-between sm:flex">
    <div>
      <h5 className="text-xl font-bold text-yellow-600">
       Name: {user.name}
      </h5>
      <h5 className="text-sm font-bold text-yellow-600">Username:</h5>
      <p className="mt-1 text-lg font-medium text-red-700">{user.username}</p>
    </div>

    <div className="ml-3 hidden flex-shrink-0 sm:block">
      <img
        alt={user.name}
        src={user.image}
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4 sm:pr-8">
    {/* <p className="text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p> */}
  </div>

  <dl className="mt-6 flex">
    <div className="flex flex-col-reverse">
    {!followed ? <button onClick={handleFollow} className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-red-900 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white">Follow</button> : <button onClick={handleFollow}>Unfollow</button>}
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