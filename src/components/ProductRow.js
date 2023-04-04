import React from "react";

function ProductRow({products}) {
    // const product = props.product;
    // const name = product.inStock ? product.name : <span style={{color: 'red'}}>{product.name}</span>;
    console.log(products);
    return (
        <tr>
            <td>{products.name}</td>
            <td>{products.price}</td>
        </tr>
    );
}

export default ProductRow;