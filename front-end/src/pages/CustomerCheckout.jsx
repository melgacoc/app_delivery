import React from 'react';
import ClientHeader from '../components/ClientHeader';
import OrderTable from '../components/OrderTable';
import TotalPriceElement from '../components/TotalPriceElement';

function CustomerCheckout() {
  return (
    <div>
      <ClientHeader />
      <OrderTable />
      <TotalPriceElement />
    </div>
  );
}

export default CustomerCheckout;
