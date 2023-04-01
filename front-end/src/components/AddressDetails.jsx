import React, { useContext } from 'react';
import Context from '../context/Context';
import {
  ADDRESS,
  ADDR_NUM,
  BTN_SUBMIT,
  ROUTE,
  SELECT } from '../dataTestedId/CustomerCheckoutIds';

function AddressDetails() {
  const { sellers } = useContext(Context);
  return (
    <form>
      <select data-testid={ `${ROUTE}${SELECT}` }>
        {sellers.map(({ name, id }, index) => (
          <option
            value={ id }
            key={ `${name}-${index}` }
          >
            {name}
          </option>
        ))}
      </select>
      <input
        type="text"
        data-testid={ `${ROUTE}${ADDRESS}` }
      />
      <input
        type="number"
        data-testid={ `${ROUTE}${ADDR_NUM}` }
      />
      <button
        type="button"
        data-testid={ `${ROUTE}${BTN_SUBMIT}` }
      >
        Finalizar pedido
      </button>
    </form>
  );
}

export default AddressDetails;
