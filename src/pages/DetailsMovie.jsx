import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import GlobalContext from "../contexts/globalContext";

const DetailsMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  const { setIsLoading } = useContext(GlobalContext);

  const fetchMovies = () => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
      setMovie(resp.data);
      setIsLoading(false);
    })
      .catch((err) => console.log(err));
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="detail-card">
              <div className="d-flex">
                <div className="cover-image">
                  <img src={`http://localhost:5173/movies_cover/${movie.image}`} alt={movie.title} />
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
            <div className="reviews">
              {/*{movie.reviews.map((review) => {
              return (
                <div key={review.id}>
                  {review.name}
                  {review.vote}
                  {review.text}
                </div>
              );
            })}*/}
            </div>
          </div>
          <div className="review-form">
            <ReviewForm movieId={id} />
          </div>
        </div>
        <div className="to-home-btn">
          <div className="square-btn">
            <Link to="/"><i className="fas fa-house" /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsMovie
