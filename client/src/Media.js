import React, { useEffect, useState } from "react";
import MediaContainer from "./MediaContainer";

export default function Media() {

    const [tvStuff, setTvStuff] = useState([])

    useEffect(() => {
        fetch("/media")
            .then(r => r.json())
            .then(stuffs => {
                setTvStuff(stuffs)
            })

    }, []);

    
    return (
        <MediaContainer tvStuff = {tvStuff} />
    )

}