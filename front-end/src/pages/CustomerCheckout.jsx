import React from 'react';
import ClientHeader from '../components/ClientHeader';
import OrderTable from '../components/OrderTable';
import TotalPriceElement from '../components/TotalPriceElement';
import AddressDetails from '../components/AddressDetails';

function CustomerCheckout() {
  return (
    <div>
      <ClientHeader />
      <OrderTable />
      <TotalPriceElement />
      <AddressDetails />
    </div>
  );
}

export default CustomerCheckout;
