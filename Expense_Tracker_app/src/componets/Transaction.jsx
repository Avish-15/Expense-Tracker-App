import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const amountClass =
    transaction.amount < 0 ? "text-red-500" : "text-green-500";
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center justify-between gap-8 border-t-2 border-b-2 border-blue-300  p-1 w-full pr-2 m-2 rounded-lg hover:bg-gray-200">
        <span className="font-semibold"> {transaction.text}</span>

        <span className={`${amountClass} font-semibold`}>
          {transaction.amount}
        </span>
      </div>
      <button
        className=" ml-2 pr-2 pl-2 pb-1 rounded-lg bg-red-400 hover:bg-red-800"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
