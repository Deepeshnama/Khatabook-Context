import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import BalanceSection from "./Components/BalanceSection";
import ListGroup from "./Components/ListGroup";
import { TransactionsProvider } from "./context/TransactionsContext";

const App = () => {

  return (
    <TransactionsProvider>
      
      <Navbar/>

      <div className="container px-3 py-5">

          <Form/>

          <BalanceSection/>

          <ListGroup/>

      </div>

    </TransactionsProvider>
  );
};

export default App;
