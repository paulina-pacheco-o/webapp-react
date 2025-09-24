import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, image, genre } = movie;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Link to={`/movies/${id}`}>
        <div className="card-movie">
          <img src={image} className='cover-movie-card' alt={title} />
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
