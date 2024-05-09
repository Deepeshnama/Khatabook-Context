import React, { useContext, useEffect, useState } from "react";
import TransactionsContext from "../context/TransactionsContext";

const Form = () => {
  const { addTransaction, edit, updateTransaction } =
    useContext(TransactionsContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? updateTransaction({
          id: edit.transaction.id,
          text,
          amount: parseInt(amount),
        })
      : addTransaction({
          id: crypto.randomUUID(),
          text,
          amount: parseInt(amount),
        });

    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className="card p-5 my-5">
      <h1 className="display-2 text-center">Enter Your Transaction</h1>

      <form className="my-2" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Transaction"
          className="form-control my-2"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />

        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control my-2"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          required
        />

        <button className="btn btn-success w-100 rounded-0 my-2">Save</button>
      </form>
    </div>
  );
};

export default Form;
