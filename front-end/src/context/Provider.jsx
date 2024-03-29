import PropTypes from 'prop-types';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Context from './Context';

const HEADER = (token) => ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
  authorization: token,
});

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [userName, setUserName] = useState('');
  const [globalCart, setGlobalCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0,00');
  const [sellers, setSellers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [specificOrder, setSpecificOrder] = useState();
  const history = useHistory();

  const cartTotalValue = useCallback((cart) => {
    const totalValue = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    setGlobalCart(totalValue);
  }, []);

  const fetchOrders = async (id, token) => {
    const response = await fetch(
      `http://localhost:3001/sales/${id}`,
      {
        method: 'GET',
        headers: HEADER(token),
      },
    );
    const data = await response.json();
    setOrders(data);
  };

  const fetchOrderById = async (id, token) => {
    const response = await fetch(
      `http://localhost:3001/sales/order/${id}`,
      {
        method: 'GET',
        headers: {
          authorization: token,
        },
      },
    );
    const data = await response.json();
    setSpecificOrder(data);
  };

  const fetchOrdersBySeller = async (id, token) => {
    const response = await fetch(
      `http://localhost:3001/sales/seller/${id}`,
      {
        method: 'GET',
        headers: HEADER(token),
      },
    );
    const data = await response.json();
    setOrders(data);
  };

  const handleStatus = async (id, status, token) => {
    const response = await fetch(
      'http://localhost:3001/sales/status-change',
      {
        method: 'PUT',
        headers: HEADER(token),
        body: JSON.stringify({ id, status }),
      },
    );
    const data = await response.json();
    return data;
  };

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
    orders,
    setOrders,
    fetchOrders,
    specificOrder,
    setSpecificOrder,
    fetchOrderById,
    fetchOrdersBySeller,
    handleStatus,
  }), [products, userName, globalCart, totalPrice, sellers, orders, specificOrder]);

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
    if (!localStorage.getItem('user')) history.push('/login');
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
