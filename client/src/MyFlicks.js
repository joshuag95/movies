import MediaCard from "./MediaCard"


export default function MyFlicks({currentUser}){
console.log(currentUser.movies)
    const flicks = currentUser.movies.map((m) => {
       return ( 
       <MediaCard name={m.title} image={m.image}/>
       )
    })
    
    return (
        <div>{flicks}</div>
    )
}