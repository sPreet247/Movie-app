import React, { useState, useEffect } from 'react';
import SearchMovies from './components/SearchMovies';
import MovieHeading from './components/MovieHeading';
import SearchInput from './components/SearchInput';
import AddFavorite from './components/AddFavorite';
import RemoveFavorites from './components/RemoveFavorites';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b8eb4d7c`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('movie-app-favorites')
    );
    setFavorites(movieFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('movie-app-favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <>
      <div>
        <MovieHeading heading='Movies' />
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div>
        <SearchMovies
          movies={movies}
          handleFavoritesClick={addFavoriteMovie}
          favoriteComponent={AddFavorite}
        />
      </div>
      <div>
        <MovieHeading heading='Favorites' />
      </div>
      <div>
        <SearchMovies
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites}
        />
      </div>
    </>
  );
}

export default App;
