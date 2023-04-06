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
import '../styles/ProductCard.css';

function ProductCard({ id, name, price, urlImage }) {
  const { setGlobalCart } = useContext(Context);
  const [quantity, setQuantity] = useState(0);

  const updateCartStorage = () => {
    const cartStorage = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')) : [];
    const itemToUpdate = {
      id,
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
    <div className="ProductCard-card">
      <div className="ProductCard-price-container">
        <p
          className="ProductCard-price"
          data-testid={ `${ROUTE}${PRICE}${id}` }
        >
          {price.replace('.', ',')}
        </p>
      </div>
      <img
        className="ProductCard-img"
        alt={ name }
        src={ urlImage }
        data-testid={ `${ROUTE}${IMAGE}${id}` }
      />
      <p
        className="ProductCard-name"
        data-testid={ `${ROUTE}${TITLE}${id}` }
      >
        {name}
      </p>
      <section className="ProductCard-tableBtn">
        <button
          className="ProductCard-btn-minus"
          type="button"
          onClick={ handleDecrement }
          data-testid={ `${ROUTE}${RM_BTN}${id}` }
        >
          -
        </button>
        <input
          className="input"
          value={ quantity }
          onChange={ handleQuantity }
          data-testid={ `${ROUTE}${INPUT}${id}` }
        />
        <button
          className="ProductCard-btn-plus"
          type="button"
          onClick={ handleIncrement }
          data-testid={ `${ROUTE}${ADD_BTN}${id}` }
        >
          +
        </button>
      </section>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;

export default ProductCard;
