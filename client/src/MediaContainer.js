import React from "react";
import MediaCard from "./MediaCard";


function MediaContainer({tvStuff, currentUser, setTvStuff}) {


   

   const array = tvStuff.map(m => {
   return ( <MediaCard key = {m.id} name = {m.title} image = {m.image.original} summary = {m.summary} m={m} currentUser={currentUser} setTvStuff={setTvStuff} />
   )})

    return (
            <div>
              {array}
            </div>
        
    )
}

export default MediaContainer