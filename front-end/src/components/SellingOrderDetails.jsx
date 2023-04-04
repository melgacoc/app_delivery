import React from 'react';
import PropTypes from 'prop-types';
import { ROUTE,
  ORDER_ID,
  DATE,
  STATUS,
  PREPARING,
  DISPATCH } from '../dataTestedId/SellerOrderDetailsIds';

const DATE_CUT_LIMIT = 10;

function SellingOrderDetails({ id, saleDate, status }) {
  return (
    <div>
      <p data-testid={ `${ROUTE}${ORDER_ID}` }>
        {id}
      </p>
      <p data-testid={ `${ROUTE}${DATE}` }>
        {saleDate.slice(0, DATE_CUT_LIMIT).split('-').reverse().join('/')}
      </p>
      <p data-testid={ `${ROUTE}${STATUS}` }>
        {status}
      </p>
      <button
        type="button"
        data-testid={ `${ROUTE}${PREPARING}` }
      >
        Preparar pedido
      </button>
      <button
        type="button"
        data-testid={ `${ROUTE}${DISPATCH}` }
        disabled
      >
        Saiu para entrega
      </button>
    </div>
  );
}

SellingOrderDetails.propTypes = {
  id: PropTypes.number,
  seller: PropTypes.string,
}.isRequired;

export default SellingOrderDetails;
