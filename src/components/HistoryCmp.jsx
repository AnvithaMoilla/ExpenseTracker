import React from 'react';

export default function History({ props }) {

    return (
        
        <div className='history'>
            <h4>History</h4>
            {props.map((transaction, index) => (
                <div 
                key={index} 
                className={`history-elements ${transaction.amount > 0 ? 'income' : 'expense'}`}
                >
                    
                    <p>{transaction.note}</p>
                    <p>${transaction.amount}</p>
                </div>
            ))}
        </div>
    );
}
