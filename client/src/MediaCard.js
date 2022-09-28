
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
        
      <div
      class="grid grid-cols-1 gap-px mt-4 bg-gray-700 border border-gray-200 sm:grid-cols-2 lg:grid-cols-3">

<img
              alt="Toy"
              src={image}
              class="object-contain w-full h-56 lg:h-72"
            />
             <button onClick={handleAddToList}
                name="add"
                type="button"
                class="flex items-center justify-center w-45 px-8 py-4 mt-4 bg-red-800 rounded-sm"
              >
                <span class="text-sm font-medium"> Add to Watchlist </span>

                <svg
                  class="w-5 h-5 ml-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
               
                </svg>
              </button>
        </div>
        

// {/* <a href="#" class=" columns-2relative block bg-black group">
//   <img
//     alt="movie-poster"
//     src={image}
//     class="absolute inset-0 object-cover w-32 h-32 transition-opacity opacity-75 group-hover:opacity-50"
//   />

//   <div class="relative p-8">
//     <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
//       {name}
//     </p>

//     <p class="text-2xl font-bold text-white"></p>

//     <div class="mt-64">
//       <div
//         class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
//       >
//         <p class="text-sm text-white">
//          {summary}
//         </p>
//       </div>
//     </div>
//   </div>
// </a> */}

//         <div className="movieCard">
            
          
//             <p> Title: {name}</p>
//             <img src= {image} alt="Title Poster"/>
//             <p>Summary: {summary}</p>
//             <button onClick={handleAddToList}>Add to Watch List</button>
//             <button>Watched</button>
           
        
        
        
//         </div>
//     )
// }
    )}