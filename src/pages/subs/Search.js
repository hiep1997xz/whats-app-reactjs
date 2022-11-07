import React from 'react';
import search from '../../images/search.png'

const Search = () => {
  return (
    <div className="search flex">
    <div className="sbox flex aic">
      <button className="s24">
        <img src={search} alt="" className="width" />
      </button>
      <input placeholder="Search chat or contacts" className="s15 font" />
    </div>
  </div>
  )
}

export default Search;