import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ROUTE,
  PRICE,
  IMAGE,
  TITLE,
  RM_BTN,
  ADD_BTN,
  INPUT,
} from '../dataTestedId/CustomerProductsIds';
import Context from '../context/Context';

function ProductCard({ id, name, price, urlImage }) {
  const { setGlobalCart } = useContext(Context);
  const [quantity, setQuantity] = useState(0);

  const updateCartStorage = () => {
    const cartStorage = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')) : [];
    const itemToUpdate = {
      name,
      quantity,
      price: Number(price),
    };
    const listToUpdate = cartStorage.filter((product) => product.name !== name);
    const newList = [...listToUpdate, itemToUpdate];
    localStorage.setItem('cart', JSON.stringify(newList));
    setGlobalCart(newList);
  };

  const handleQuantity = ({ target }) => {
    if (target.value >= 0) setQuantity(Number(target.value));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  useEffect(() => {
    updateCartStorage();
  }, [quantity]);

  return (
    <div>
      <p data-testid={ `${ROUTE}${TITLE}${id}` }>{name}</p>
      <p data-testid={ `${ROUTE}${PRICE}${id}` }>{price.replace('.', ',')}</p>
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
        value={ quantity }
        onChange={ handleQuantity }
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
