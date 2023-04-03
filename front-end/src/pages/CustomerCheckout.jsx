import React from 'react';
import ClientHeader from '../components/ClientHeader';
import OrderTable from '../components/OrderTable';
import TotalPriceElement from '../components/TotalPriceElement';
import AddressDetails from '../components/AddressDetails';
import {
  ROUTE,
} from '../dataTestedId/CustomerCheckoutIds';

function CustomerCheckout() {
  return (
    <div>
      <ClientHeader />
      <OrderTable testIdRoute={ ROUTE } />
      <TotalPriceElement testIdRoute={ ROUTE } />
      <AddressDetails />
    </div>
  );
}

export default CustomerCheckout;
