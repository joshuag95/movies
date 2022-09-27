import React from "react";
import MediaCard from "./MediaCard";


function MediaContainer({tvStuff}) {


   

   const array = tvStuff.map(m => {
   return ( <MediaCard key = {m.id} name = {m.name} image = {m.image.original} genres = {m.genres} summary = {m.summary} />
   )})

    return (
        
            <div>
              {array}
            </div>
        
    )
}

export default MediaContainer