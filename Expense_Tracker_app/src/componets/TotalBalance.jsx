import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TotalBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((t) => t.amount);

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="bg-blue-300 rounded-lg mr-8 w-67 p-1">
      <h3 className="text-3xl font-semibold text-indigo-700">Balance</h3>
      <h6 className="font-extralight font-mono text-indigo-700">₹{total}</h6>
    </div>
  );
};

export default TotalBalance;
