import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/Context';
import { ROUTE,
  ORDER_ID,
  DATE,
  STATUS,
  PRICE } from '../dataTestedId/CustomerOrdersIds';

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
      {orders.length > 0
      && orders.map(({ id, status, totalPrice, saleDate }, index) => (
        <Link
          to={ `/customer/orders/${id}` }
          key={ index }
        >
          <div>
            <p data-testid={ `${ROUTE}${ORDER_ID}${id}` }>
              {id}
            </p>
            <p data-testid={ `${ROUTE}${STATUS}${id}` }>
              {status}
            </p>
            <p data-testid={ `${ROUTE}${DATE}${id}` }>
              {saleDate.slice(0, DATE_CUT_LIMIT).split('-').reverse().join('/')}
            </p>
            <p data-testid={ `${ROUTE}${PRICE}${id}` }>
              {totalPrice.replace('.', ',')}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CustomerOrders;
