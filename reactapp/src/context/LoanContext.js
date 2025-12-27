import React, { createContext, useState } from 'react';

export const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
    const [loans, setLoans] = useState([]);

    const addLoan = (loan) => {
        setLoans([...loans, { ...loan, id: Date.now() }]);
    };

    return (
        <LoanContext.Provider value={{ loans, addLoan }}>
            {children}
        </LoanContext.Provider>
    );
};