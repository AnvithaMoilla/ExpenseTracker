import React from 'react';

export default function IncomeExpense({ props }) {

    let income = 0;
    let expense = 0;

    props.forEach(transaction => {
        if (transaction.amount > 0) {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    });

    return (
        <div className='incomeExpense'>
            <div className="income-expense-cell" id='income'>
                <p>Income</p>
                <p>${income}</p>
            </div>

            <div className="income-expense-divider" ></div>

            <div className="income-expense-cell" id='expense'>
                <p>Expenses</p>
                <p>${-expense}</p>
            </div>
        </div>
    );
}
