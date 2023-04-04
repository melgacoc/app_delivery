import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClientHeader from '../components/ClientHeader';
import Context from '../context/Context';
import { ROUTE,
  ORDER_ID,
  DATE,
  STATUS,
  PRICE,
  ADDRESS } from '../dataTestedId/SellerOrdersIds';

const DATE_CUT_LIMIT = 10;

function SellerOrders() {
  const { orders, fetchOrdersBySeller } = useContext(Context);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetchOrdersBySeller(user.id, user.token);
  }, []);

  return (
    <div>
      <ClientHeader />
      {orders.length > 0
      && orders.map(({ id,
        status,
        totalPrice,
        saleDate,
        deliveryAddress,
        deliveryNumber,
      }, index) => (
        <Link
          to={ `/seller/orders/${id}` }
          key={ index }
        >
          <div>
            <p data-testid={ `${ROUTE}${ORDER_ID}${id}` }>
              {id}
            </p>
            <p data-testid={ `${ROUTE}${STATUS}${id}` }>
              {status}
            </p>
            <p data-testid={ `${ROUTE}${DATE}${id}` }>
              {saleDate.slice(0, DATE_CUT_LIMIT).split('-').reverse().join('/')}
            </p>
            <p data-testid={ `${ROUTE}${PRICE}${id}` }>
              {totalPrice.replace('.', ',')}
            </p>
            <p data-testid={ `${ROUTE}${ADDRESS}${id}` }>
              {`${deliveryAddress}, ${deliveryNumber}`}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SellerOrders;
