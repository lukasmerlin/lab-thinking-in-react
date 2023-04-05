import React from "react";
import ProductRow from "./ProductRow";
import jsonData from "./../data.json";

function ProductTable(props) {
  console.log(props.search)
  const filteredData = props.search ? jsonData.filter((product) =>   product.name.toLowerCase().includes(props.search.toLowerCase())): jsonData; 
   return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
          filteredData.map((data) => {
            if(props.stock == true)
            { 
             if(props.stock === data.inStock)  return <ProductRow key={data.id} product={data} />;
            }
            else {
              return <ProductRow key={data.id} product={data} />;

            }
          
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;