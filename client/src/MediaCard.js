
export default function MediaCard({name, image, summary, m, currentUser}){

// const genre = genres.forEach(((item) => {
//     return (item)
// }))


const handleAddToList = () => {
    const movieData = {
        user_id: currentUser.id, 
        movie_id: m.id
    }
    fetch("/add_movie", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(movieData),
        })
        .then((r) => r.json())
        .then((info) => console.log(info))
}

    return (
        <div className="movieCard">
            
          
            <p> Title: {name}</p>
            <img src= {image} alt="Title Poster"/>
            <p>Summary: {summary}</p>
            <button onClick={handleAddToList}>Add to Watch List</button>
            <button>Watched</button>
           
        
        
        
        </div>
    )
}