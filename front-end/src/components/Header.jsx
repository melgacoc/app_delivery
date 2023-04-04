import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ROUTE,
  HEADER_NAME,
  HEADER_LOGOUT,
} from '../dataTestedId/clientHeaderIds';
import Context from '../context/Context';
import LeftSellerHeader from './LeftSellerHeader';
import LeftCustomerHeader from './LeftCustomerHeader';

function Header() {
  const history = useHistory();
  const { userName, setUserName } = useContext(Context);
  const [role, setRole] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user.token) history.push('/login');

    setUserName(user.name);
    setRole(user.role);
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div>
      {role === 'seller' && <LeftSellerHeader />}
      {role === 'customer' && <LeftCustomerHeader />}
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

export default Header;
