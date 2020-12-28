import React from 'react';

function SearchMovies(props) {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt='movie'></img>
          <div>
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}

export default SearchMovies;
