import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from '../contexts/globalContext';
import MovieCard from '../components/MovieCard';


const Homepage = () => {

  const [movies, setMovies] = useState([]);
  const { setIsLoading } = useContext(GlobalContext);

  const fetchMovies = () => {
    setIsLoading(true);
    axios.get("http://127.0.0.1:3000/api/movies").then((resp) => {
      setMovies(resp.data);
      setIsLoading(false);
    })
      .catch((err) => console.log(err));
  };

  useEffect(fetchMovies, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-3">
          <h1 className='title-homepage'>Boolmovies</h1>
        </div>
      </div>
      <div className="row gy-3">
        {movies.map((movie) => {
          const { id } = movie;
          return (
            <MovieCard key={id} movie={movie} />
          )
        })}
      </div>
    </div>
  )
}

export default Homepage
