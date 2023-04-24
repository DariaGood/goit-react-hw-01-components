import React from 'react';
import propTypes from 'prop-types';
import ItemTransaction from './itemtransaction/ItemTransaction';
import css from './transactions.module.css'

function TransactionHistory(props) {
  const items = props.items;

  return (
    <table className={css.transactionhistory}>
      <thead>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <ItemTransaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
      }).isRequired
    ).isRequired
  };

export default TransactionHistory;
