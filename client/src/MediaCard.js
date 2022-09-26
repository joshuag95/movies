
export default function MediaCard({name, image, summary, genres }){

const genre = genres.forEach(((item) => {
    return (item)
}))
    return (
        <div className="movieCard">
            
          
            <p> Title: {name}</p>
            {/* <img src= {image} alt="Title Poster"/> */}
            <p>Summary: {summary}</p>
            <button>Want to Watch</button>
            <button>Watched</button>
           
        
        
        
        </div>
    )
}