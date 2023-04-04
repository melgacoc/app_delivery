import React from 'react';
import PropTypes from 'prop-types';
import { ROUTE,
  ORDER_ID,
  SELLER,
  DATE,
  STATUS,
  CHECK } from '../dataTestedId/CustomerOrderDetailsIds';

const DATE_CUT_LIMIT = 10;

function OrderDetails({ id, seller, saleDate, status }) {
  // const [disabled, setDisabled] = useState(false);

  // useEffect(() => {
  //   if (status === 'Entregue') setDisabled(true);
  // }, []);

  return (
    <div>
      <p data-testid={ `${ROUTE}${ORDER_ID}` }>
        {id}
      </p>
      <p data-testid={ `${ROUTE}${SELLER}` }>
        {seller}
      </p>
      <p data-testid={ `${ROUTE}${DATE}` }>
        {saleDate.slice(0, DATE_CUT_LIMIT).split('-').reverse().join('/')}
      </p>
      <p data-testid={ `${ROUTE}${STATUS}` }>
        {status}
      </p>
      <button
        type="button"
        data-testid={ `${ROUTE}${CHECK}` }
        disabled
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
