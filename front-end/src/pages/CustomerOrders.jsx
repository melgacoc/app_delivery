import React, { useContext, useEffect } from 'react';
import ClientHeader from '../components/ClientHeader';
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
    const user = JSON.parse(localStorage.getItem('user'));
    fetchOrders(user.id, user.token);
  }, []);

  return (
    <div>
      <ClientHeader />
      {orders.length > 0
      && orders.map(({ id, status, totalPrice, saleDate }, index) => (
        <div key={ index }>
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
      ))}
      {/* {orders.map(({ id, status, totalPrice, saleDate }, index) => (
        <div key={ index }>
          <p data-testid={ `${ROUTE}${ORDER_ID}${id}` }>
            {id}
          </p>
          <p data-testid={ `${ROUTE}${STATUS}${id}` }>
            {status}
          </p>
          <p data-testid={ `${ROUTE}${DATE}${id}` }>
            {saleDate.toJSON().slice(0, DATE_CUT_LIMIT).split('-').reverse()
                .join('/')}
          </p>
          <p data-testid={ `${ROUTE}${PRICE}${id}` }>
            {totalPrice.toFixed(2).replace('.', ',')}
          </p>
        </div>
      ))} */}
    </div>
  );
}

export default CustomerOrders;
