function FollowingCard({name, username}){

    const handleUnfollow = () => {
        
    }


    return (
        <a
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
    >
      <span
        class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-700 via-yellow-600 to-red-700"
      ></span>
    
      <div class="justify-between sm:flex">
        <div>
          <h5 class="text-xl font-bold text-yellow-600">
           Name: {name}
          </h5>
    
          <p class="mt-1 text-md font-medium text-red-700">Username: {username}</p>
        </div>
    
        <div class="ml-3 hidden flex-shrink-0 sm:block">
          <img
            alt={name}
            // src={image}
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
       <button onClick={handleUnfollow}>Unfollow</button>
        </div>
    
        
      </dl>
    </a>
    

        // <div>
        //     <p>Name: {name}</p>
        //     <p>Username: {username}</p>
        //     <button onClick={handleUnfollow}>Unfollow</button>
        // </div>
    )
}

export default FollowingCard