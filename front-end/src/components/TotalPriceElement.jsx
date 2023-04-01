import React, { useContext } from 'react';
import Context from '../context/Context';
import {
  ROUTE,
  TOTAL,
} from '../dataTestedId/CustomerCheckoutIds';

function TotalPriceElement() {
  const { totalPrice } = useContext(Context);
  return (
    <div>
      <p data-testid={ `${ROUTE}${TOTAL}` }>
        {totalPrice}
      </p>
    </div>
  );
}

export default TotalPriceElement;
