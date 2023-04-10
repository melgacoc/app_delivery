import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ITEM_NUM,
  NAME,
  QNT,
  PRICE,
  SUBTOTAL,
} from '../dataTestedId/CustomerCheckoutIds';
import Context from '../context/Context';
import '../styles/SellerOrderTable.css';

function SellerOrderTable({ testIdRoute, products }) {
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

  return (
    <table className="SellerOrderTable-table">
      <thead className="SellerOrderTable-thead">
        <tr className="SellerOrderTable-tablerow-head">
          <th className="SellerOrderTable-item-number SellerOrderTable-heading">Item</th>
          <th
            className="SellerOrderTable-description SellerOrderTable-heading"
          >
            Descrição

          </th>
          <th
            className="SellerOrderTable-quantity SellerOrderTable-heading"
          >
            Quantidade

          </th>
          <th
            className="SellerOrderTable-unit-value SellerOrderTable-heading"
          >
            Valor unitário

          </th>
          <th
            className="SellerOrderTable-subtotal SellerOrderTable-heading"
          >
            Sub-total

          </th>
        </tr>
      </thead>
      <tbody className="SellerOrderTable-tbody">
        {order.map(({ name, quantity, price }, index) => (
          <tr key={ `${name}-${index}` } className="SellerOrderTable-tbody-tr">
            <td
              data-testid={ `${testIdRoute}${ITEM_NUM}${index}` }
              className="SellerOrderTable-item-number"
            >
              {index + 1}
            </td>
            <td
              data-testid={ `${testIdRoute}${NAME}${index}` }
              className="SellerOrderTable-description"
            >
              {name}
            </td>
            <td
              data-testid={ `${testIdRoute}${QNT}${index}` }
              className="SellerOrderTable-quantity"
            >
              {quantity}
            </td>
            <td
              data-testid={ `${testIdRoute}${PRICE}${index}` }
              className="SellerOrderTable-unit-value"
            >
              {price.toFixed(2).toString().replace('.', ',')}
            </td>
            <td
              data-testid={ `${testIdRoute}${SUBTOTAL}${index}` }
              className="SellerOrderTable-subtotal"
            >
              {(price * quantity).toFixed(2).toString().replace('.', ',')}
            </td>
          </tr>))}
      </tbody>
    </table>
  );
}

SellerOrderTable.propTypes = {
  testIdRoute: PropTypes.string,
}.isRequired;

export default SellerOrderTable;
