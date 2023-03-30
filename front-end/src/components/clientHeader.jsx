import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ROUTE,
  HEADER_PRODUCTS,
  HEADER_ORDERS,
  HEADER_NAME,
  HEADER_LOGOUT,
} from '../dataTestedId/clientHeaderIds';

function ClientHeader() {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    // const token = localStorage.getItem('token');
    // if (!token) {
    // history.push('/login');
    // }

    // const fetch = async () => {
    //   const response = await fetch(
    //     'http://localhost:3001/users/register',
    //     {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    //         'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
    //       },
    //     },
    //   );

    //   const { name } = await response.json();
    //   setUser({ name });
    // };
  });

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
    history.push('/login');
  };

  return (
    <div>
      <h1>Client Header</h1>
      <p
        data-testid={ `${ROUTE}${HEADER_PRODUCTS}` }
      >
        Produtos
      </p>
      <p
        data-testid={ `${ROUTE}${HEADER_ORDERS}` }
      >
        Meus Pedidos
      </p>
      <p
        data-testid={ `${ROUTE}${HEADER_NAME}` }
      >
        { user.name }
      </p>
      <button
        data-testid={ `${ROUTE}${HEADER_LOGOUT}` }
        type="button"
        id="logOut"
        name="logOut"
        onClick={ handleLogOut }
      >
        Sair
      </button>
    </div>
  );
}

export default ClientHeader;
