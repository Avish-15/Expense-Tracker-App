import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const insitalState = {
  transactions: [
    { id: 1, text: "Flowers", amount: -400 },
    { id: 2, text: "Bill", amount: -1200 },
    { id: 3, text: "Salary", amount: 500000 },
  ],
};

export const GlobalContext = createContext(insitalState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, insitalState);

  function deleteTransaction(id) {
    dispatch({
      type: "Delete",
      payload: id,
    });
  }

  function addTransaction(transactions) {
    dispatch({
      type: "Add",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
