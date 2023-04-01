import PropTypes from 'prop-types';
import { useState, useMemo, useEffect, useCallback } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState('');
  const [globalCart, setGlobalCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0,00');
  const [sellers, setSellers] = useState([]);

  const cartTotalValue = useCallback((cart) => {
    const totalValue = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    setGlobalCart(totalValue);
  }, []);

  const contextValue = useMemo(() => ({
    products,
    setProducts,
    userName,
    setUserName,
    globalCart,
    setGlobalCart,
    cartTotalValue,
    totalPrice,
    setTotalPrice,
    sellers,
    setSellers,
  }), [products, userName, globalCart, totalPrice, sellers]);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3001/products');
    const data = await response.json();
    setProducts(data);
  };

  const fetchSellers = async () => {
    const response = await fetch('http://localhost:3001/users/sellers');
    const data = await response.json();
    setSellers(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchSellers();
  }, []);

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
