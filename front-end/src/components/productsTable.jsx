import React, { useEffect, useState } from 'react';
import '../styles/productCard.css';

function ProductsTable() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (value) => {
    setCart(...cart, value);
    console.log(cart);
  };

  return (
    <div
      className="container"
      key={ id }
    >
      <h3>{id}</h3>
      <p>{ name }</p>
      <img src={ urlImage } alt={ name } />
      <p>
        R$:
        {price}
      </p>
      <button
        type="button"
        id="addButton"
        name="addbutton"
        value={ id }
        onClick={ ({ target }) => handleAddToCart(target.value) }
      >
        +
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        disabled="true"
      />
      <button>
        -
      </button>
    </div>
  );
}

export default ProductsTable;
