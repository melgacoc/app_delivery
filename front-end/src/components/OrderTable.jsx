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
import '../styles/OrderTable.css';

function OrderTable({ testIdRoute, products }) {
  const { globalCart, setTotalPrice, setGlobalCart } = useContext(Context);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (products) {
      const settedOrder = products.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: Number(item.product.price),
      }));
      setOrder(settedOrder);
    } else {
      const onlyOrder = globalCart.filter((product) => product.quantity > 0);
      setOrder(onlyOrder);
    }
  }, []);

  useEffect(() => {
    const valueToUpdate = order
      .reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    const fixedValue = valueToUpdate.toFixed(2).replace('.', ',');
    setTotalPrice(fixedValue);
    setGlobalCart(order);
  }, [order]);

  const handleRemove = (name) => {
    const newList = order.filter((product) => product.name !== name);
    setOrder(newList);
  };

  const setSubtotalClass = () => {
    if (products) return 'OrderTable-subtotal';
    return 'OrderTable-subtotal-alt';
  };

  return (
    <table className="OrderTable-table">
      <thead className="OrderTable-thead">
        <tr className="OrderTable-tablerow-head">
          <th className="OrderTable-item-number OrderTable-heading">Item</th>
          <th className="OrderTable-description OrderTable-heading">Descrição</th>
          <th className="OrderTable-quantity OrderTable-heading">Quantidade</th>
          <th className="OrderTable-unit-value OrderTable-heading">Valor unitário</th>
          <th className="OrderTable-subtotal OrderTable-heading">Sub-total</th>
          {!products && (
            <th className="OrderTable-remove-btn OrderTable-heading">Remover item</th>
          )}
        </tr>
      </thead>
      <tbody className="OrderTable-tbody">
        {order.map(({ name, quantity, price }, index) => (
          <tr
            key={ `${name}-${index}` }
            className="OrderTable-tbody-tr"
          >
            <td
              data-testid={ `${testIdRoute}${ITEM_NUM}${index}` }
              className="OrderTable-item-number"
            >
              {index + 1}
            </td>
            <td
              data-testid={ `${testIdRoute}${NAME}${index}` }
              className="OrderTable-description"
            >
              {name}
            </td>
            <td
              className="OrderTable-quantity"
              data-testid={ `${testIdRoute}${QNT}${index}` }
            >
              {quantity}
            </td>
            <td
              className="OrderTable-unit-value"
              data-testid={ `${testIdRoute}${PRICE}${index}` }
            >
              {price.toFixed(2).toString().replace('.', ',')}
            </td>
            <td
              className={ setSubtotalClass() }
              data-testid={ `${testIdRoute}${SUBTOTAL}${index}` }
            >
              {(price * quantity).toFixed(2).toString().replace('.', ',')}
            </td>
            {!products && (
              <td className="OrderTable-remove-btn">
                <button
                  className="OrderTable-buttons-table"
                  type="button"
                  data-testid={ `${testIdRoute}${REMOVE}${index}` }
                  onClick={ () => handleRemove(name) }
                >
                  Remover
                </button>
              </td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  testIdRoute: PropTypes.string,
}.isRequired;

export default OrderTable;
