import React from "react";
import MediaCard from "./MediaCard";


function MediaContainer({tvStuff, currentUser}) {


   console.log(currentUser)

   const array = tvStuff.map(m => {
   return ( <MediaCard key = {m.id} name = {m.name} image = {m.image.original} summary = {m.summary} m={m} currentUser={currentUser} />
   )})

    return (

    //   <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    // <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
    //   <div class="lg:sticky lg:top-4">
    //     <details open class="overflow-hidden border border-gray-200 rounded">
    //       <summary
    //         class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
    //         </summary>
    //         </details>
    //         </div>
    //         </div>
    //         </div>
        
            <div>
              {array}
            </div>
        
    )
}

export default MediaContainer