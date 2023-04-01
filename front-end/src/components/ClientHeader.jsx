import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  ROUTE,
  HEADER_PRODUCTS,
  HEADER_ORDERS,
  HEADER_NAME,
  HEADER_LOGOUT,
} from '../dataTestedId/clientHeaderIds';
import Context from '../context/Context';

function ClientHeader() {
  const history = useHistory();
  const { userName, setUserName } = useContext(Context);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user.token) history.push('/login');

    setUserName(user.name);
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div>
      <Link to="/customer/products">
        <p
          data-testid={ `${ROUTE}${HEADER_PRODUCTS}` }
        >
          Produtos
        </p>
      </Link>
      <Link to="/customer/orders">
        <p
          data-testid={ `${ROUTE}${HEADER_ORDERS}` }
        >
          Meus Pedidos
        </p>
      </Link>
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
