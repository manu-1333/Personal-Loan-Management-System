import React, { useContext } from 'react';
import { LoanContext } from '../context/LoanContext';
import { Link } from 'react-router-dom';

const LoanList = () => {
    const { loans } = useContext(LoanContext);

    return (
        <div>
            <h2>Loan List</h2>
            {loans.map((loan) => (
                <div key={loan.id}>
                    <Link to={`/loan/${loan.id}`}>
                        {loan.name} - {loan.amount} - {loan.status}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default LoanList;