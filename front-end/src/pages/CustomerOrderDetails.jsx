import React, { useContext, useEffect } from 'react';
import ClientHeader from '../components/ClientHeader';
import OrderTable from '../components/OrderTable';
import TotalPriceElement from '../components/TotalPriceElement';
import { ROUTE } from '../dataTestedId/CustomerOrderDetails';
import OrderDetails from '../components/OrderDetails';
import Context from '../context/Context';

function CustomerOrderDetails() {
  const { orders, fetchOrders } = useContext(Context);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetchOrders(user.id, user.token);
    console.log(orders);
  }, []);

  return (
    <div>
      <ClientHeader />
      {orders.map((order, index) => (
        <div
          key={ index }
          data-testid={ `customer_orders__element-order-date-${order.id}` }
        >
          <OrderDetails />
          <OrderTable testIdRoute={ ROUTE } />
          <TotalPriceElement testIdRoute={ ROUTE } />
        </div>
      ))}
    </div>
  );
}

export default CustomerOrderDetails;
