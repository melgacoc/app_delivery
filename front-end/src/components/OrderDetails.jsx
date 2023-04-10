import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ROUTE,
  ORDER_ID,
  SELLER,
  DATE,
  STATUS,
  CHECK } from '../dataTestedId/CustomerOrderDetailsIds';
import '../styles/OrderDetails.css';

const DATE_CUT_LIMIT = 10;

function OrderDetails({ id, seller, saleDate, status }) {
  const [statusClass, setStatusClass] = useState('OrderDetails-pending');
  const [disabledButton, setDisabledButton] = useState('true');

  useEffect(() => {
    if (status === 'Preparando'
    || status === 'Em trânsito') setStatusClass('OrderDetails-preparing');
    if (status === 'Em Trânsito') setDisabledButton(false);
    if (status === 'Entregue') setStatusClass('OrderDetails-delivered');
  }, []);
  return (
    <div className="OrderDetails-main-div">
      <p data-testid={ `${ROUTE}${ORDER_ID}` } className="OrderDetails-details">
        {id}
      </p>
      <p data-testid={ `${ROUTE}${SELLER}` } className="OrderDetails-details">
        {seller}
      </p>
      <p data-testid={ `${ROUTE}${DATE}` } className="OrderDetails-details">
        {saleDate.slice(0, DATE_CUT_LIMIT).split('-').reverse().join('/')}
      </p>
      <p data-testid={ `${ROUTE}${STATUS}` } className={ statusClass }>
        {status}
      </p>
      <button
        className="OrderDetails-btn"
        type="button"
        data-testid={ `${ROUTE}${CHECK}` }
        disabled={ disabledButton }
      >
        Marcar como entregue
      </button>
    </div>
  );
}

OrderDetails.propTypes = {
  id: PropTypes.number,
  seller: PropTypes.string,
}.isRequired;

export default OrderDetails;
