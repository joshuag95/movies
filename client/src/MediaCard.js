import { useState } from "react"

export default function MediaCard({ name, image, m, setCurrentUser, setUserMovies, summary }) {

    const [watched, setWatched] = useState(false)


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
            .then(info => {
                setUserMovies(info)
            })
    }


    const handleUpdateWatched = () => {
        setWatched((watched) => !watched)
        fetch(`/saved_movies`, {
            method: "PATCH",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify({
                watched: watched
            }),
        })
            .then(res => res.json())
            .then(newInfo => setUserMovies(newInfo))
    }

    return (
        <a className="group relative block bg-black">
            <img
                alt="Developer"
                src={image}
                className="absolute inset-0 h-full w-full object-fit opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    {/* {name} */}
                </p>


                <div className="mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                            {/* {summary} */}
                        </p>
                        {!watched ?
                            <button onClick={handleAddToList} className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-red-900 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white">Add to Watch List</button>
                            :
                            <button onClick={handleUpdateWatched} className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-red-900 border border-yellow-700 rounded-md shrink-0 hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:text-yellow-700 dark:hover:bg-red-700 dark:hover:text-white">Watched</button>
                        }
                    </div>
                </div>
            </div>
        </a>

    )
}
