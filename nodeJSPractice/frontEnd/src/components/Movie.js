import React, {useState, useEffect} from 'react';


const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("/movies/").then(res => {
            if (res.ok){
                return res.json()
            }
        }).then (jsonRes => setMovies(jsonRes.movieList))
    })

    return(
        <div>
            {movies.map((movie) => <li>{movie.title}</li>)}
            {console.log(movies)}
        </div>
    )
}

export default Movies