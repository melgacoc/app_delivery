import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import {
  ADDRESS,
  ADDR_NUM,
  BTN_SUBMIT,
  ROUTE,
  SELECT } from '../dataTestedId/CustomerCheckoutIds';

function AddressDetails() {
  const history = useHistory();
  const { sellers, totalPrice, globalCart } = useContext(Context);
  const [user, setUser] = useState({});
  const [seller, setSeller] = useState(null);
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    setUser(localStorageUser);
  }, []);

  const submitOrder = async () => {
    const requestBody = {
      userId: user.id,
      sellerId: seller,
      totalPrice: Number(totalPrice.replace(',', '.')),
      deliveryAddress: address,
      deliveryNumber: number,
      order: globalCart,
    };

    const response = await fetch(
      'http://localhost:3001/sales/new-order',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
          authorization: user.token,
        },
        body: JSON.stringify(requestBody),
      },
    );
    const data = await response.json();
    const CREATED_STATUS = 201;
    if (response.status === CREATED_STATUS) history.push(`/customer/orders/${data.id}`);
  };

  return (
    <form>
      <select
        data-testid={ `${ROUTE}${SELECT}` }
        onChange={ ({ target }) => setSeller(Number(target.value)) }
      >
        <option>
          Selecione o vendedor
        </option>
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
        onChange={ ({ target }) => setAddress(target.value) }
      />
      <input
        type="number"
        data-testid={ `${ROUTE}${ADDR_NUM}` }
        onChange={ ({ target }) => setNumber(Number(target.value)) }
      />
      <button
        type="button"
        data-testid={ `${ROUTE}${BTN_SUBMIT}` }
        onClick={ submitOrder }
      >
        Finalizar pedido
      </button>
    </form>
  );
}

export default AddressDetails;
