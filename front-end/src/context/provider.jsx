import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import Context from './context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const contextValue = useMemo(() => ({
    products,
    setProducts,
  }), [products]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
