import React, { useContext } from "react";
import TransactionsContext from "../context/TransactionsContext";

const ListItem = ({ transaction }) => {
  const { deleteTransaction , editTransaction } = useContext(TransactionsContext);

  return (
    <li
      className={
        transaction.amount > 0
          ? "list-group-item rounded-0 bg-success"
          : "list-group-item rounded-0 bg-danger"
      }
    >
      <h3 className="display-4 text-light">
        {transaction.text} : {transaction.amount}{" "}
      </h3>

      <p className="display-6 text-info">id : {transaction.id} </p>

      <span className="float-end">
        <button
          className="btn btn-outline-warning btn-sm rounded-0 mx-1"
          onClick={() => editTransaction(transaction)}
        >
          Edit
        </button>

        <button
          className="btn btn-outline-dark btn-sm rounded-0 mx-1 "
          onClick={() => deleteTransaction(transaction.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
