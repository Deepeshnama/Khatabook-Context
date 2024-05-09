import React, { useContext } from 'react'
import TransactionsContext from '../context/TransactionsContext'

const BalanceSection = () => {

  
    const {transactions} = useContext(TransactionsContext);


    const balance = transactions.reduce((p,c) => p+c.amount , 0)

    const income = transactions.filter((transaction) => transaction.amount > 0).reduce((p,c) => p+c.amount , 0)

    const expense = transactions.filter((transaction) => transaction.amount < 0).reduce((p,c) => p+c.amount , 0)


  return (
    
    <div className="my-3 row g-2">
        <div className="col-md-12 col-lg-4 ">
          <div className="card p-3 bg-primary rounded-0">
            <h1 className="display-4">Total Income : </h1>
            <h1 className="display-4">{income}</h1>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 ">
          <div className="card p-3 bg-danger rounded-0">
            <h1 className="display-4">Total Exp : </h1>
            <h1 className="display-4">{expense}</h1>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 ">
          <div className="card p-3 bg-warning rounded-0">
            <h1 className="display-4">Balance : </h1>
            <h1 className="display-4">{balance}</h1>
          </div>
        </div>
      </div>

  )
}

export default BalanceSection