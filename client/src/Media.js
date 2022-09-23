import React, { useEffect } from "react";
import MediaContainer from "./MediaContainer";

export default function Media() {

    useEffect(() => {
        fetch("/media")
            .then(r => r.json())
            .then(respBody => {
                console.log(respBody.results)
            })

    }, []);

    return (
        <MediaContainer />
    )

}