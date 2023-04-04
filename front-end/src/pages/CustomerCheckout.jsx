import React, { useEffect } from 'react';
import Header from '../components/Header';
import OrderTable from '../components/OrderTable';
import TotalPriceElement from '../components/TotalPriceElement';
import AddressDetails from '../components/AddressDetails';
import {
  ROUTE,
} from '../dataTestedId/CustomerCheckoutIds';

function CustomerCheckout() {
  useEffect(() => {
    document.title = 'Checkout - Delivery App';
  }, []);

  return (
    <div>
      <Header />
      <OrderTable testIdRoute={ ROUTE } />
      <TotalPriceElement testIdRoute={ ROUTE } />
      <AddressDetails />
    </div>
  );
}

export default CustomerCheckout;
