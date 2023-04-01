import React from 'react';
import ClientHeader from '../components/ClientHeader';
import OrderTable from '../components/OrderTable';
import TotalPriceElement from '../components/TotalPriceElement';
import { ROUTE } from '../dataTestedId/CustomerOrderDetails';
import OrderDetails from '../components/OrderDetails';

function CustomerOrderDetails() {
  return (
    <div>
      <ClientHeader />
      <OrderDetails />
      <OrderTable testIdRoute={ ROUTE } />
      <TotalPriceElement testIdRoute={ ROUTE } />
    </div>
  );
}

export default CustomerOrderDetails;
