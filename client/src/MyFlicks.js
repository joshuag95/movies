import { useEffect, useState } from "react"
import MediaCard from "./MediaCard"


export default function MyFlicks({currentUser, tvStuff, setTvStuff}){

    const [userMovies, setUserMovies] = useState([])

    useEffect(() => {
        fetch("/user_movies")
            .then(r => r.json())
            .then(stuffs => {
                setUserMovies(stuffs)
                console.log(stuffs)
            })
                
    }, []);

console.log(userMovies)

    const flicks = userMovies.map((m) => {
       return ( 
       <MediaCard name={m.title} image={m.image} setUserMovies={setUserMovies}/>
       )
    })
    
    return (
        <div>
            <h1>My Movies</h1>
            {flicks}
            
            </div>
    )
}