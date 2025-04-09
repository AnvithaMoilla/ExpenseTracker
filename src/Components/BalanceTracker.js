import React from 'react';

export default function BalanceTracker({ props }) {

    const totalSum = props.reduce((sum, transaction) => sum + transaction.amount, 0);

    return (
        <div className='balance'>
            <p>
                <h4>Your Balance</h4>
                <h1>${totalSum}</h1>
            </p>
        </div>
    );
}
