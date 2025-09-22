import React, { useState } from 'react';
import { useState, useEffect } from 'react';

const Homepage = () => {

  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("http://127.0.0.1:3000/api/movies").tehn((resp) => {
      setMovies(resp.data);
    })
      .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-3">
          <h1>Boolmovies</h1>
        </div>
      </div>
      <div className="row gy-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card-movie">
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
