import React from 'react';

const Search = (props) => {
  return (
    <input
      onChange={props.handleInputChange}
      value={props.search}
      name='search'
      type='search'
      className='form-control my-4 mx-auto col-auto col-sm-4 col-lg-3'
      placeholder='Search'
    />
  );
};

export default Search;
