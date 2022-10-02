import React, { useEffect, useState } from "react";
import MediaContainer from "./MediaContainer";

export default function Media({currentUser, tvStuff, setTvStuff}) {

   

    useEffect(() => {
        fetch("/media")
            .then(r => r.json())
            .then(stuffs => {
                setTvStuff(stuffs)
            })
                console.log("triggered")
    }, []);

    console.log(currentUser)
    return (
        
        <MediaContainer tvStuff = {tvStuff} currentUser={currentUser} setTvStuff={setTvStuff} />
    )

}