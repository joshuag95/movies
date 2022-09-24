
export default function MediaCard({name, image, summary, genres }){

const genre = genres.forEach(((item) => {
    return (item)
}))
    return (
        <div className="movieCard">
            
          
            <p> Title: {name}</p>
            <img src= {image} alt="Title Poster"/>
            <p>Genre: {genre}</p>
            <p>Summary: {summary}</p>
           
        
        
        
        </div>
    )
}