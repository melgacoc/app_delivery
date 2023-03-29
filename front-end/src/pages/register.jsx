import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE,
  EMAIL,
  NAME,
  PASSWORD,
  BUTTON,
  INVALID } from '../dataTestedId/registerIds';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const passwordMin = 6;
    const validName = 12;
    if (regex.test(email)
    && password.length >= passwordMin
    && name.length > validName) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [name, email, password]);

  const handleSubmit = async () => {
    const requestBody = {
      name,
      email,
      password,
    };

    const response = await fetch(
      'http://localhost:3001/users/register',
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
    console.log(data);
    const NOT_FOUND_STATUS = 404;
    const OK_STATUS = 200;
    if (response.status === NOT_FOUND_STATUS) setInvalidLogin(true);
    if (response.status === OK_STATUS) {
      history.push('/customer/products');
    }
  };

  return (
    <div>
      <label htmlFor="name">
        Nome
        <input
          data-testid={ `${ROUTE}${NAME}` }
          type="text"
          id="name"
          name="name"
          placeholder="Nome"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          data-testid={ `${ROUTE}${EMAIL}` }
          type="email"
          id="email"
          name="email"
          placeholder="Email"
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
          placeholder="Password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        data-testid={ `${ROUTE}${BUTTON}` }
        type="button"
        id="subButton"
        name="subButton"
        placeholder="Entrar"
        disabled={ disableButton }
        onClick={ handleSubmit }
      >
        Cadastrar
      </button>
      {
        invalidLogin ? (
          <div
            data-testid={ `${ROUTE}${INVALID}` }
          >
            Error
          </div>
        ) : (null)
      }
    </div>
  );
}

export default Register;
