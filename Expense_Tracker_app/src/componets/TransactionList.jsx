import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className=" p-2 m-4 mr-30  bg-white rounded-2xl ">
      <h4 className="text-2xl font-semibold mb-4 border-b-2">History</h4>
      <ul>
        {transactions.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
