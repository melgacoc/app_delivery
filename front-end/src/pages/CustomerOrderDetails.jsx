import React, { useEffect, useState } from 'react';
import ClientHeader from '../components/ClientHeader';
import OrderTable from '../components/OrderTable';
import TotalPriceElement from '../components/TotalPriceElement';
import { ROUTE } from '../dataTestedId/CustomerOrderDetails';
import OrderDetails from '../components/OrderDetails';

function CustomerOrderDetails() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async (id) => {
    const response = await fetch(`http://localhost:3001/sales/${id}`);
    const data = await response.json();
    setOrders(data);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetchOrders(user.id);
  }, []);

  return (
    <div>
      <ClientHeader />
      {orders.map((order, index) => (
        <div
          key={ index }
          data-testid={ `customer_orders__element-order-id-${order.id}` }
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
