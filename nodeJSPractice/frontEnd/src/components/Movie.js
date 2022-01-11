import React, {useState, useEffect} from 'react';


const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("/movies/").then( res => {
            if (res.ok){
                return res.json
            } else{
                 return console.log('could not fetch')
            }
        }).then (jsonRes => setMovies(jsonRes.movies))
    })

    return(
        <div>
            {movies.map((movie) => <li>{movie}</li>)}
            {console.log(movies)}
        </div>
    )
}

export default Movies