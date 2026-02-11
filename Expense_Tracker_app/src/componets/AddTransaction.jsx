import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    (setText(""), setAmount(0));
  };
  return (
    <div className="flex">
      <form onSubmit={onSubmit}>
        <label className="mr-2 font-semibold">Text:</label>
        <input
          className="border border-blue-400  rounded focus:outline-blue-500 focus:bg-white pt-0.5 pl-1 pb-0.5 mb-4"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
          required
        />
        <br />
        <label className="mr-2 font-semibold">
          Amount:{" "}
          <span className="font-light text-red-500">
            (if expense use negative sign with amount)
          </span>
        </label>
        <br></br>
        <input
          className="border rounded pt-0.5 pl-1 pb-0.5 border-blue-400 focus:outline-blue-500 focus:bg-white mt-2"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
          required
        />
        <br />
        <button className="border mt-4 p-0.5 pr-2 pl-2 bg-amber-500 hover:bg-amber-800  text-white text-lg rounded-lg font-semibold p">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
