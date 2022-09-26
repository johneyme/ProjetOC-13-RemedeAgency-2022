import React from 'react';
import PropTypes from 'prop-types';
import './TransactionInfo.css';

/** @function manage the title infos on the transaction page.
 *
 * @component
 * @param {string} infoAccount
 * @param {string} amount
 * @returns (<TransactionInfo/>)
 */

function TransactionInfo({ infoAccount, amount }) {
  return (
    <section className="titleSection">
      <div className="titleSection-content-wrapper">
        <h3 className="titleSection-title">{infoAccount}</h3>
        <p className="titleSection-amount">{amount}</p>
        <p className="titleSection-amount-description">Available Balance</p>
      </div>
    </section>
  );
}

TransactionInfo.propTypes = {
  infoAccount: PropTypes.string,
  amount: PropTypes.string,
};

export default TransactionInfo;
