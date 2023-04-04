import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClientHeader from '../components/ClientHeader';
import OrderTable from '../components/OrderTable';
import TotalPriceElement from '../components/TotalPriceElement';
import { ROUTE, ORDER_ID } from '../dataTestedId/CustomerOrderDetailsIds';
import OrderDetails from '../components/OrderDetails';
import Context from '../context/Context';

function CustomerOrderDetails({ match }) {
  const { specificOrder, fetchOrderById } = useContext(Context);
  const { params: { id } } = match;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetchOrderById(id, user.token);
  }, []);

  return (
    <div>
      <ClientHeader />
      {specificOrder && (
        <div
          data-testid={ `${ROUTE}${ORDER_ID}` }
        >
          <OrderDetails
            id={ specificOrder.order.id }
            seller={ specificOrder.seller.name }
            saleDate={ specificOrder.order.saleDate }
            status={ specificOrder.order.status }
          />
          <OrderTable testIdRoute={ ROUTE } products={ specificOrder.products } />
          <TotalPriceElement testIdRoute={ ROUTE } />
        </div>
      )}
    </div>
  );
}

CustomerOrderDetails.propTypes = {
  params: PropTypes.object,
}.isRequired;

export default CustomerOrderDetails;
