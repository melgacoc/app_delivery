import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import { TOTAL } from '../dataTestedId/CustomerCheckoutIds';
import '../styles/TotalPriceElement.css';

function TotalPriceElement({ testIdRoute }) {
  const { totalPrice } = useContext(Context);
  return (
    <div className="TotalPriceElement-container">
      <p data-testid={ `${testIdRoute}${TOTAL}` }>
        {`TOTAL: ${totalPrice}`}
      </p>
    </div>
  );
}

TotalPriceElement.propTypes = {
  testIdRoute: PropTypes.string,
}.isRequired;

export default TotalPriceElement;
