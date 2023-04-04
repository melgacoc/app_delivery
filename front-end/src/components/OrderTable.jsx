import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ITEM_NUM,
  NAME,
  QNT,
  PRICE,
  SUBTOTAL,
  REMOVE,
} from '../dataTestedId/CustomerCheckoutIds';
import Context from '../context/Context';

function OrderTable({ testIdRoute, products }) {
  const { globalCart, setTotalPrice, setGlobalCart } = useContext(Context);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (products) {
      const settedOrder = products.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
      }));
      setOrder(settedOrder);
    } else {
      const onlyOrder = globalCart.filter((product) => product.quantity > 0);
      setOrder(onlyOrder);
    }
  }, []);

  useEffect(() => {
    if (!products) {
      const valueToUpdate = order
        .reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
      const fixedValue = valueToUpdate.toFixed(2).replace('.', ',');
      setTotalPrice(fixedValue);
      setGlobalCart(order);
    }
  }, [order]);

  const handleRemove = (name) => {
    const newList = order.filter((product) => product.name !== name);
    setOrder(newList);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {order.map(({ name, quantity, price }, index) => (
            <td key={ `${name}-${index}` }>
              <p data-testid={ `${testIdRoute}${ITEM_NUM}${index}` }>
                {index + 1}
              </p>
              <p data-testid={ `${testIdRoute}${NAME}${index}` }>
                {name}
              </p>
              <p data-testid={ `${testIdRoute}${QNT}${index}` }>
                {quantity}
              </p>
              <p data-testid={ `${testIdRoute}${PRICE}${index}` }>
                {price.toString().replace('.', ',')}
              </p>
              <p data-testid={ `${testIdRoute}${SUBTOTAL}${index}` }>
                {(price * quantity).toFixed(2).toString().replace('.', ',')}
              </p>
              {!products && (
                <button
                  type="button"
                  data-testid={ `${testIdRoute}${REMOVE}${index}` }
                  onClick={ () => handleRemove(name) }
                >
                  Remover
                </button>)}
            </td>))}
        </tr>
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  testIdRoute: PropTypes.string,
}.isRequired;

export default OrderTable;
