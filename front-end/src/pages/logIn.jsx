import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ROUTE,
  EMAIL,
  PASSWORD,
  BUTTON,
  REGISTER,
  INVALID } from '../dataTestedId/logInIds';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const passwordMin = 6;
    if (regex.test(email) && password.length >= passwordMin) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [email, password]);

  const handleSubmit = async () => {
    const requestBody = {
      email,
      password,
    };

    const response = await fetch(
      'http://localhost:3001/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        },
        body: JSON.stringify(requestBody),
      },
    );

    const data = await response.json();

    const user = {
      name: data.name,
      email: data.email,
      role: data.role,
      token: data.token
    }

    localStorage.setItem('user', user);

    console.log(data);
    const NOT_FOUND_STATUS = 404;
    const OK_STATUS = 200;
    if (response.status === NOT_FOUND_STATUS) setInvalidLogin(true);
    if (response.status === OK_STATUS) {
      history.push('/customer/products');
    }
  };

  return (
    <div className="logInContainer">
      <section className="logInLogo">
        <img src="" alt="" />
      </section>
      <section>
        <label htmlFor="email">
          Email
          <input
            data-testid={ `${ROUTE}${EMAIL}` }
            type="email"
            id="email"
            name="email"
            placeholder="LogIn"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid={ `${ROUTE}${PASSWORD}` }
            type="password"
            id="password"
            name="password"
            value={ password }
            placeholder="Password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid={ `${ROUTE}${BUTTON}` }
          type="submit"
          id="subButton"
          name="subButton"
          onClick={ handleSubmit }
          placeholder="Entrar"
          disabled={ disableButton }
        >
          Entrar
        </button>
        <Link to="/register">
          <button
            data-testid={ `${ROUTE}${REGISTER}` }
            name="registerButton"
            id="registerButton"
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </section>
      {' '}
      {
        invalidLogin && (
          <section>
            <div
              data-testid={ `${ROUTE}${INVALID}` }
            >
              E-mail or password invalids
            </div>
          </section>
        )
      }
    </div>
  );
}

export default LogIn;
