import React from "react";
import MediaCard from "./MediaCard";


function MediaContainer({tvStuff, currentUser}) {


   console.log(currentUser)

   const array = tvStuff.map(m => {
   return ( <MediaCard key = {m.id} name = {m.name} image = {m.image.original} summary = {m.summary} m={m} currentUser={currentUser} />
   )})

    return (
        
            <div>
              {array}
            </div>
        
    )
}

export default MediaContainer