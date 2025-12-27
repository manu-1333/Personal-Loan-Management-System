import React, { useState, useContext } from 'react';
import { LoanContext } from '../context/LoanContext';

const AddLoan = () => {
    const { addLoan } = useContext(LoanContext);
    const [formData, setFormData] = useState({ name: '', amount: '', status: 'Pending' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation check for empty fields
        if (formData.name && formData.amount) {
            addLoan(formData);
            setFormData({ name: '', amount: '', status: 'Pending' });
        }
    };

    return (
        <div>
            <h2>Add New Loan</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Loan Name" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                />
                <input 
                    placeholder="Loan Amount" 
                    type="number" 
                    value={formData.amount} 
                    onChange={(e) => setFormData({...formData, amount: e.target.value})} 
                />
                <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})}>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                </select>
                <button type="submit">Add Loan</button>
            </form>
        </div>
    );
};

export default AddLoan;