import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ROUTE,
  ORDER_ID,
  DATE,
  STATUS,
  PREPARING,
  DISPATCH } from '../dataTestedId/SellerOrderDetailsIds';
import Context from '../context/Context';

const DATE_CUT_LIMIT = 10;

function SellingOrderDetails({ id, saleDate, status }) {
  const { handleStatus } = useContext(Context);
  const [preparingBtn, setPreparingBtn] = useState(false);
  const [dispatchBtn, setDispatchBtn] = useState(true);
  const [updatedStatus, setUpdatedStatus] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setUpdatedStatus(status);
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    setUser(localStorageUser);
  }, []);

  useEffect(() => {
    if (updatedStatus === 'Preparando') {
      setPreparingBtn(true);
      setDispatchBtn(false);
    }
    if (updatedStatus === 'Em Trânsito') {
      setPreparingBtn(true);
      setDispatchBtn(true);
    }
  }, [updatedStatus]);

  const handlePreparing = async (orderId, statusToChange) => {
    const updatedOrder = await handleStatus(orderId, statusToChange, user.token);
    setUpdatedStatus(updatedOrder.status);
    setPreparingBtn(true);
    setDispatchBtn(false);
  };

  const handleDispatch = async (orderId, statusToChange) => {
    const updatedOrder = await handleStatus(orderId, statusToChange, user.token);
    setUpdatedStatus(updatedOrder.status);
    setDispatchBtn(true);
  };

  return (
    <div>
      <p data-testid={ `${ROUTE}${ORDER_ID}` }>
        {id}
      </p>
      <p data-testid={ `${ROUTE}${DATE}` }>
        {saleDate.slice(0, DATE_CUT_LIMIT).split('-').reverse().join('/')}
      </p>
      <p data-testid={ `${ROUTE}${STATUS}` }>
        {updatedStatus}
      </p>
      <button
        type="button"
        data-testid={ `${ROUTE}${PREPARING}` }
        onClick={ () => handlePreparing(id, 'Preparando') }
        disabled={ preparingBtn }
      >
        Preparar pedido
      </button>
      <button
        type="button"
        data-testid={ `${ROUTE}${DISPATCH}` }
        disabled={ dispatchBtn }
        onClick={ () => handleDispatch(id, 'Em Trânsito') }
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
