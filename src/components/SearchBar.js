
import { useState } from 'react';


function SearchBar(props) {
  return (
    <div className="Searchbar">
        <label>Search: </label>
        <input type="text" placeholder="Search..." />
        <br />
        <input type="checkbox" />
        <label>Only show Products in Stock</label>

    </div>
  );
}

export default SearchBar;