import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/Context';
import { ROUTE,
  ORDER_ID,
  DATE,
  STATUS,
  PRICE } from '../dataTestedId/CustomerOrdersIds';
import '../styles/CustomerOrders.css';

const DATE_CUT_LIMIT = 10;

function CustomerOrders() {
  const { orders, fetchOrders } = useContext(Context);

  useEffect(() => {
    document.title = 'Orders - Delivery App';
    const user = JSON.parse(localStorage.getItem('user'));
    fetchOrders(user.id, user.token);
  }, []);

  return (
    <div>
      <Header />
      <section className="container">
      <div className="table">
        <h1 className="value">Id</h1>
        <h1 className="value">Status</h1>
        <h1 className="value">Data</h1>
        <h1 className="value">Valor</h1>
      </div>
      {orders.length > 0
      && orders.map(({ id, status, totalPrice, saleDate }, index) => (
        <Link className="ordersTable"
          to={ `/customer/orders/${id}` }
          key={ index }
        >
          <div className="ordersContent">
            <p
            className="idValue"
            data-testid={ `${ROUTE}${ORDER_ID}${id}` }>
              {id}
            </p>
            <p
            className={ status }
            data-testid={ `${ROUTE}${STATUS}${id}` }>
              {status}
            </p>
            <p
            className="dateValue"
            data-testid={ `${ROUTE}${DATE}${id}` }>
              {saleDate.slice(0, DATE_CUT_LIMIT).split('-').reverse().join('/')}
            </p>
            <p
            className="priceValue"
            data-testid={ `${ROUTE}${PRICE}${id}` }>
              {totalPrice.replace('.', ',')}
            </p>
          </div>
        </Link>
      ))}
      </section>
    </div>
  );
}

export default CustomerOrders;
