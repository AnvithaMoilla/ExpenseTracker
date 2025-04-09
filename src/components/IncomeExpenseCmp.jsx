import React from 'react';

export default function IncomeExpense({ props }) {

    const { income, expense } = props.reduce((accuulator,transaction) => {
        if (transaction.amount > 0) {
            accuulator.income += transaction.amount;
        } else {
            accuulator.expense += transaction.amount;
        }
        return accuulator;
    }, { income: 0, expense: 0 });

    return (
        <div className='income-expense'>
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
