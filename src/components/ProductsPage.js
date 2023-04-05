import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [stock, setStock] = useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleChangeCheckBox = (event) => {
    console.log(event.target.checked)
    setStock(event.target.checked);
  };

  return(
    <div>
    <h1>IronStore</h1>
        <SearchBar trigger={handleChange} checkbox = {handleChangeCheckBox} /> 
        <ProductTable  search = {search} stock = {stock}/>
    </div> 
  )
}

export default ProductsPage;
