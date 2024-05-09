import { createContext, useState } from "react";

const TransactionsContext = createContext();

// Transaction Provider

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  // Add Transaction

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
    // console.log(transaction)
  };

  // Delete Transaction

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
    // console.log(transactions.id)
  };

  // Edit Transaction

  const editTransaction = (oldTransaction) => {
    setEdit({
      transaction: oldTransaction,
      isEdit: true,
    });
  };

  // Update Transaction

  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((item) =>
        item.id === updatedTransaction.id ? updatedTransaction : item
      )
    );

    setEdit({
      transaction : {},
      isEdit : false ,
    })

  };




  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        edit,
        addTransaction,
        deleteTransaction,
        editTransaction,
        updateTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContext;
