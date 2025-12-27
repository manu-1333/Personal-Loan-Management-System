import React from 'react';

const LoanStatus = ({ status }) => {
    const statusStyle = {
        color: status === 'Approved' ? 'green' : 'orange',
        fontWeight: 'bold'
    };
    return <span style={statusStyle}>{status}</span>;
};

export default LoanStatus;