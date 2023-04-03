import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import { TOTAL } from '../dataTestedId/CustomerCheckoutIds';

function TotalPriceElement({ testIdRoute }) {
  const { totalPrice } = useContext(Context);
  return (
    <div>
      <p data-testid={ `${testIdRoute}${TOTAL}` }>
        {totalPrice}
      </p>
    </div>
  );
}

TotalPriceElement.propTypes = {
  testIdRoute: PropTypes.string,
}.isRequired;

export default TotalPriceElement;
