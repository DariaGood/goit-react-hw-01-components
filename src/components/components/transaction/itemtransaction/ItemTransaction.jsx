import React from "react";
import propTypes from 'prop-types';
import css from '../transactions.module.css'

function ItemTransaction(props){
const {id, type, amount, currency} = props;


    return(
        <tr className={css.tr} key={id}>
          <td className={css.td}>{type}</td>
          <td className={css.td}>{amount}</td>
          <td className={css.td}>{currency}</td>
        </tr>
    )
}

ItemTransaction.propTypes = {
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
  };

export default ItemTransaction;