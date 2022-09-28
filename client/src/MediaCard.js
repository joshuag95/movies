
export default function MediaCard({name, image, summary, m, currentUser}){

// const genre = genres.forEach(((item) => {
//     return (item)
// }))


const handleAddToList = () => {
    const movieData = {
        title: m.name,
        summary: m.summary,
        image: m.image.original,
            
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
        


        <div className="grid grid-cols-1 gap-px mt-4 bg-gray-700 border border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            
          
            <p> Title: {name}</p>
            <img src= {image} alt="Title Poster"  className="object-contain w-full h-56 lg:h-72" />
            {/* <p>Summary: {summary}</p> */}
            <button onClick={handleAddToList}>Add to Watch List</button>
            <button>Watched</button>
           
        
        
        
        </div>
    )
}
    