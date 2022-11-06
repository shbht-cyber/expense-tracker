import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      {transactions.length > 0 && <h3>History</h3>}
      <ul className="list">
        {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
      </ul>
    </>
  );
};

export default TransactionList;
