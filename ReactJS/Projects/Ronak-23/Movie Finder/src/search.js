import React, {useState} from 'react';
import Cards from "./Cards"

export default function Search()
{
    const [query, setQuery] = useState('')
    const [movies, setMovies]= useState([])
    const searchM = async(e) =>{
        e.preventDefault()
        const url= `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`
        try{
            console.log("submitting")
            const res = await fetch(url) 
            const data =await res.json()
            setMovies(data.results)
        }catch(err)
        {
            console.log(err)
        }
    }
    return(
        <>
        <form className="form" onSubmit={searchM}>
            <label htmlFor="query" className="label" >Movie name</label>
            <input className="input" placeholder="e.g Avengers" type="text" name="query" value= {query} onChange = {(e)=> setQuery(e.target.value)}  />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="cardItems">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <Cards movies={movie}/>
            )
            )}
        </div>
            
        </>
    )
}

