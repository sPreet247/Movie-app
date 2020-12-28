import React, { useState, useEffect } from 'react';
import SearchMovies from './components/SearchMovies';
import MovieHeading from './components/MovieHeading';
import SearchInput from './components/SearchInput';
import AddFavorite from './components/AddFavorite';

function App() {
  const [movies, setMovies] = useState([]);
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
        <SearchMovies movies={movies} favoriteComponent={AddFavorite} />
      </div>
    </>
  );
}

export default App;
