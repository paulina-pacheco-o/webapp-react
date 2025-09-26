import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          <h1>Boolmovies</h1>
          <Link className="btn btn-add text-center" to="/movies/create">
            Aggiungi un nuovo film
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
