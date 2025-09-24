import React from 'react'

const MovieCard = ({ movie }) => {
  const { title, image, genre } = movie;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card-movie">
        <img src={image} className='cover-movie-card' alt={title} />
      </div>
    </div>
  )
}

export default MovieCard
