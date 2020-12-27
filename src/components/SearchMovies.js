import React from 'react';

function SearchMovies(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt='movie'></img>
        </div>
      ))}
    </>
  );
}

export default SearchMovies;
