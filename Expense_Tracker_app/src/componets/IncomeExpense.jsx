import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((t) => t.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="flex mt-5 mr-14 ">
      <div className="bg-green-300 rounded-lg p-1 pr-2 mr-4">
        <h4 className="text-green-800 font-bold">Income</h4>
        <p className="text-green-800 font-bold">+₹{income}</p>
      </div>

      <div className="bg-red-300 rounded-lg p-1 pr-4 ml-4">
        <h4 className="text-red-900 font-bold ">Expense</h4>
        <p className="text-red-900 font-bold">-₹{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
