import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClientHeader from '../components/ClientHeader';
import TotalPriceElement from '../components/TotalPriceElement';
import { ROUTE } from '../dataTestedId/SellerOrderDetailsIds';
import Context from '../context/Context';
import SellingOrderDetails from '../components/SellingOrderDetails';
import SellerOrderTable from '../components/SellerOrderTable';

function SellerOrderDetails({ match }) {
  const { specificOrder, setSpecificOrder } = useContext(Context);
  const { params: { id } } = match;
  const [loading, setLoading] = useState(true);

  const fetchOrderById = async (orderId, token) => {
    const response = await fetch(
      `http://localhost:3001/sales/order/${orderId}`,
      {
        method: 'GET',
        headers: {
          authorization: token,
        },
      },
    );
    const data = await response.json();
    setSpecificOrder(data);
    setLoading(false);
    console.log(specificOrder);
  };

  useEffect(() => {
    document.title = 'Order Details - Delivery App';
    const user = JSON.parse(localStorage.getItem('user'));
    fetchOrderById(id, user.token);
    console.log(specificOrder);
  }, []);

  return (
    <div>
      <ClientHeader />
      {loading ? (<h1>Carregando...</h1>) : (
        <div>
          <SellingOrderDetails
            id={ specificOrder.order.id }
            seller={ specificOrder.seller.name }
            saleDate={ specificOrder.order.saleDate }
            status={ specificOrder.order.status }
          />
          <SellerOrderTable testIdRoute={ ROUTE } products={ specificOrder.products } />
          <TotalPriceElement testIdRoute={ ROUTE } />
        </div>
      )}
    </div>
  );
}

SellerOrderDetails.propTypes = {
  params: PropTypes.object,
}.isRequired;

export default SellerOrderDetails;
