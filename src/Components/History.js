import React from 'react';

export default function History({ props }) {

    return (
        
        <div className='history'>
            <h4>History</h4>
            {props.map((transaction, index) => (
                <div 
                key={index} 
                className={`historyElements ${transaction.amount > 0 ? 'income' : 'expense'}`}
                >
                    
                    <p>Transaction: {transaction.note}</p>
                    <p>Amount: ${transaction.amount}</p>
                </div>
            ))}
        </div>
    );
}
