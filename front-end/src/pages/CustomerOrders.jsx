import React, { useContext, useEffect } from 'react';
import ClientHeader from '../components/ClientHeader';
import Context from '../context/Context';
import { ROUTE,
  ORDER_ID,
  DATE,
  STATUS,
  PRICE } from '../dataTestedId/CustomerOrdersIds';

function CustomerOrders() {
  const { orders, fetchOrders } = useContext(Context);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetchOrders(user.id, user.token);
    console.log(orders);
  }, []);

  return (
    <div>
      <ClientHeader />
      {orders.map(({ id }, index) => (
        <div key={ index }>
          <p data-testid={ `${ROUTE}${ORDER_ID}${id}` }>
            {}
          </p>
          <p data-testid={ `${ROUTE}${STATUS}${id}` }>
            {}
          </p>
          <p data-testid={ `${ROUTE}${DATE}${id}` }>
            {}
          </p>
          <p data-testid={ `${ROUTE}${PRICE}${id}` }>
            {}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CustomerOrders;
