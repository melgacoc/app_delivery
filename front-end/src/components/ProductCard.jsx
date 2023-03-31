import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Context from '../context/Context';
import {
  ROUTE,
  PRICE,
  IMAGE,
  TITLE,
  RM_BTN,
  ADD_BTN,
  INPUT,
} from '../dataTestedId/CustomerProductsIds';

function ProductCard({ id, name, price, urlImage }) {
  // const { productsQuantity, setProductsQuantity } = useContext(Context);
  const [item, setItem] = useState(0);
  const [car, setCar] = useState([]);

  useEffect(() => {
    const carStorage = localStorage.getItem('carStorage')
      ? JSON.parse(localStorage.getItem('carStorage')) : [];
    setCar(carStorage);
  }, []);

  useEffect(() => {
    const itemToUpdate = {
      product: name,
      quantity: item,
    };

    const listToUpdate = car.filter((product) => product.product !== name);
    setCar([...listToUpdate, itemToUpdate]);
  }, [item]);

  const handleIncrement = () => {
    setItem(item + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 0) setItem(item - 1);
  };

  return (
    <div>
      <p data-testid={ `${ROUTE}${TITLE}${id}` }>{name}</p>
      <p data-testid={ `${ROUTE}${PRICE}${id}` }>{price}</p>
      <img
        alt={ name }
        src={ urlImage }
        width="50px"
        height="50px"
        data-testid={ `${ROUTE}${IMAGE}${id}` }
      />
      <button
        type="button"
        onClick={ handleDecrement }
        data-testid={ `${ROUTE}${RM_BTN}${id}` }
      >
        -
      </button>
      <input
        type="number"
        value={ item }
        onChange={ ({ target }) => setItem(target.value) }
        data-testid={ `${ROUTE}${INPUT}${id}` }
      />
      <button
        type="button"
        onClick={ handleIncrement }
        data-testid={ `${ROUTE}${ADD_BTN}${id}` }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;

export default ProductCard;
