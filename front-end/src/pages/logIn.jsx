import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE,
  EMAIL,
  PASSWORD,
  BUTTON,
  REGISTER,
  INVALID } from '../dataTestedId/logInIds';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const emailValue = '';
  // const passwordValue = '';

  const query = {
    email,
    password,
  };

  const handleSubmit = async () => {
    const response = await fetch(
      'http://localhost:3001/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      },
    );

    const data = JSON.parse(response);
    return data;
  };

  const data = 'test';

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
            onChange={ ({ target }) => setEmail(target) }
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
            onChange={ ({ target }) => setPassword(target) }
          />
        </label>
        <button
          data-testid={ `${ROUTE}${BUTTON}` }
          type="submit"
          id="subButton"
          name="subButton"
          onClick={ handleSubmit }
          placeholder="Entrar"
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
        (data.status === '') ? (
          <section>
            <div
              data-testid={ `${ROUTE}${INVALID}` }
            >
              Error
            </div>
          </section>
        ) : (null)
      }
    </div>
  );
}

export default LogIn;
