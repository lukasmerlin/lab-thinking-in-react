import React, { useState } from "react";

function SearchBar({trigger : handleChange , checkbox : handleChangeCheckBox}) {
  console.log(handleChange)
  
  return (
    <div className="Searchbar">
      <label>Search: </label>
      <input type="text" onChange={handleChange} />
      <br />
      <input type="checkbox"  onChange ={handleChangeCheckBox} />
      <label>Only show Products in Stock</label>
    </div>
  );
}

export default SearchBar;