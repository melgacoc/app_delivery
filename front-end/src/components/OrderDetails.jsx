import React from 'react';
import { ROUTE,
  ORDER_ID,
  SELLER,
  DATE,
  STATUS,
  CHECK } from '../dataTestedId/CustomerOrderDetails';

function OrderDetails() {
  return (
    <div>
      <p data-testid={ `${ROUTE}${ORDER_ID}` }>
        {}
      </p>
      <p data-testid={ `${ROUTE}${SELLER}` }>
        {}
      </p>
      <p data-testid={ `${ROUTE}${DATE}` }>
        {}
      </p>
      <p data-testid={ `${ROUTE}${STATUS}` }>
        {}
      </p>
      <button
        type="button"
        data-testid={ `${ROUTE}${CHECK}` }
      >
        Marcar como entregue
      </button>
    </div>
  );
}

export default OrderDetails;
