import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState('');
  const [productsQuantity, setProductsQuantity] = useState([]);

  const contextValue = useMemo(() => ({
    products,
    setProducts,
    userName,
    setUserName,
    productsQuantity,
    setProductsQuantity,
  }), [products, userName, productsQuantity]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
