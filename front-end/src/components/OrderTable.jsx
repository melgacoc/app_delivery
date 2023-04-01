import React, { useContext, useEffect, useState } from 'react';
import {
  ROUTE,
  ITEM_NUM,
  NAME,
  QNT,
  PRICE,
  SUBTOTAL,
  REMOVE,
} from '../dataTestedId/CustomerCheckoutIds';
import Context from '../context/Context';

function OrderTable() {
  const { globalCart } = useContext(Context);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const onlyOrder = globalCart.filter((product) => product.quantity > 0);
    setOrder(onlyOrder);
  }, []);

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
              <p data-testid={ `${ROUTE}${ITEM_NUM}${index}` }>
                {index + 1}
              </p>
              <p data-testid={ `${ROUTE}${NAME}${index}` }>
                {name}
              </p>
              <p data-testid={ `${ROUTE}${QNT}${index}` }>
                {quantity}
              </p>
              <p data-testid={ `${ROUTE}${PRICE}${index}` }>
                {price.toFixed(2).toString().replace('.', ',')}
              </p>
              <p data-testid={ `${ROUTE}${SUBTOTAL}${index}` }>
                {(price * quantity).toFixed(2).toString().replace('.', ',')}
              </p>
              <button
                type="button"
                data-testid={ `${ROUTE}${REMOVE}${index}` }
              >
                Remover
              </button>
            </td>))}
        </tr>
      </tbody>
    </table>
  );
}

export default OrderTable;
