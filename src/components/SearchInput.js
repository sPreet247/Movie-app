import React from 'react';

function SearchInput(props) {
  return (
    <>
      <input
        placeholder='Search movie'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </>
  );
}

export default SearchInput;
