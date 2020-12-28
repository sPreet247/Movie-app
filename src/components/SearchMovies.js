import React from 'react';

function SearchMovies(props) {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          s<img src={movie.Poster} alt='movie'></img>
          <div onClick={() => props.handleFavoritesClick(movie)}>
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}

export default SearchMovies;
