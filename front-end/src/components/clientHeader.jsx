import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ROUTE,
  HEADER_PRODUCTS,
  HEADER_ORDERS,
  HEADER_NAME,
  HEADER_LOGOUT,
} from '../dataTestedId/clientHeaderIds';
import Context from '../context/context';

function ClientHeader() {
  const history = useHistory();
  const { userName, setUserName } = useContext(Context);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user.token) history.push('/login');

    setUserName(user.name);
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
        {userName}
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
