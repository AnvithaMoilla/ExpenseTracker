import React, { useState,useEffect } from 'react';
import BalanceTracker from './BalanceTrackerCmp';
import IncomeExpense from './IncomeExpenseCmp';
import History from './HistoryCmp';

export default function InputDetails() {

    const [transaction, setTransaction]= useState([])

    useEffect(() => {
        const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
        if (savedTransactions) {
            setTransaction(savedTransactions);
        }
    }, []);

    useEffect(() => {
        if (transaction.length > 0) {
            localStorage.setItem('transactions', JSON.stringify(transaction));
        }
    }, [transaction]);


    function addDetails(e) {
        e.preventDefault();

        let newTransaction = {
            note: e.target[0].value,
            amount: +e.target[1].value
        }

        setTransaction(prev => ([...prev, newTransaction ]))
    }

    return (
        <>
        <BalanceTracker props={transaction}/>
        <IncomeExpense props={transaction}/>

        <form className="input-details" onSubmit={addDetails}>
            <h4>Add New Transaction</h4>

            <label>Text</label>
            <br />
            <input
                type="text"
                id="note"
                placeholder="Enter Text..."
            />
            <br />
            <label>Amount</label>
            <br />
            <input
                type="number"
                id="amount"
                placeholder="Enter Amount..."
            />
            <br />
            <br />
            <button type="submit" id='transaction-btn'>Add Transaction</button>
        </form>
        <History props={transaction}/>
        </>
    );
}
