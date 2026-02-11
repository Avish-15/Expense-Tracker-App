import "./App.css";
import AddTransaction from "./componets/AddTransaction";
import TransactionList from "./componets/TransactionList";
import TotalBalance from "./componets/TotalBalance";
import IncomeExpense from "./componets/IncomeExpense";
import Header from "./componets/Header";

function App() {
  return (
    <>
      <Header />
      <div className="place-self-center flex-col justify-items-center w-fit  bg-gray-100 rounded-4xl p-8 m-20">
        <TotalBalance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
