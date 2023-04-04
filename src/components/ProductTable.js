import React from "react";
import ProductRow from "./ProductRow";
import jsonData from "./../data.json";

function ProductTable(props) {

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
            {jsonData.forEach((product) => {
                <ProductRow product={product} />
                console.log(product);
            }
            )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;