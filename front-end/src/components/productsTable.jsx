import React from 'react';
import PropTypes from 'prop-types';

function ProductsTable({ name, price, urlImage }) {
  return (
    <div>
      <p>{name}</p>
      <input
        type="number"
      />
      <p>{price}</p>
      <img
        alt={ name }
        src={ urlImage }
        width="50px"
        height="50px"
      />
    </div>
  );
}

ProductsTable.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;

export default ProductsTable;
