import React from 'react';
import {
  dataTransactionsContent,
  dataTransactionsInfo,
} from '../../data/dataTransactions';
import './Transactions.css';

import TransactionContent from '../../components/TransactionContent/TransactionContent';
import TransactionInfo from '../../components/TransactionInfo/TransactionInfo';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../utils/axios';

/** @function create he transaction page based on the user's info recovered from the database.
 *
 * @returns (<Transactions/>)
 */

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const param = useParams();

  useEffect(() => {
    const response = api.getTransactionsByAccount(param.id);
    setTransactions(response);
  }, [param.id]);

  return (
    <div>
      {dataTransactionsInfo.map((account, index) => (
        <TransactionInfo
          key={index}
          infoAccount={account.infoAccount}
          amount={account.amount}
        />
      ))}

      <main className="main bg-dark transaction">
        <div className="dataHead">
          <div id="arrow" className="dataLineItem"></div>
          <div id="date" className="dataLineItem">
            DATE
          </div>
          <div id="descr" className="dataLineItem">
            DESCRIPTION
          </div>
          <div id="amount" className="dataLineItem">
            AMOUNT
          </div>
          <div id="balance" className="dataLineItem">
            BALANCE
          </div>
        </div>

        {dataTransactionsContent.map((account, index) => (
          <TransactionContent
            key={index}
            date={account.date}
            descr={account.description}
            amount={account.amount}
            balance={account.balance}
            transType={account.transType}
            category={account.category}
            note={account.note}
          />
        ))}
      </main>
    </div>
  );
}

export default Transactions;
