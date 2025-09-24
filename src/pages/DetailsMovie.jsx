import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  const fetchMovies = () => {
    axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
      setMovie(resp.data);
    })
      .catch((err) => console.log(err));
  };

  useEffect(fetchMovies, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="detail-card">
            <div className="d-flex">
              <div className="cover-image">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="text-details text-center mt-3">
                <h1>{movie.title}</h1>
                <p>{movie.director}</p>
                <p>{movie.genre}</p>
                <p>{movie.release_year}</p>
                <p>{movie.abstract}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsMovie
