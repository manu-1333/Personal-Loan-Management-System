import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LoanContext } from '../context/LoanContext';

const LoanDetails = () => {
    const { id } = useParams();
    const { loans } = useContext(LoanContext);
    const loan = loans.find((l) => l.id === parseInt(id));

    if (!loan) return <div>Loan not found</div>;

    return (
        <div>
            <h2>Loan Details</h2>
            <p>Loan Name: {loan.name}</p>
            <p>Amount: {loan.amount}</p>
            <p>Status: {loan.status}</p>
        </div>
    );
};

export default LoanDetails;