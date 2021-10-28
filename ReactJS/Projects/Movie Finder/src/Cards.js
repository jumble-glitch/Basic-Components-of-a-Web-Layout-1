import React from 'react';

export default function Cards(props){
    const movie = props.movies
    return(
        <div className="card" key={movie.id}>
                    <img className="cardImage" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt= {movie.title + `poster`} />
                    <div className= "cardContent">
                        <h1 className="cardTitle">{movie.title}</h1>
                        <p><small>Release Date: {movie.release_date}</small></p>
                        <p><small>Rating: {movie.vote_average}</small></p>
                        <p className="cardDesc">{movie.overview}</p>
                    </div>
        </div>
    )
}