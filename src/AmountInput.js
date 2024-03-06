// AmountInput.js
import React, { useState } from 'react';

const AmountInput = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    if (amount !== '') {
      onSubmit(parseFloat(amount));
    }
  };

  return (
    <div>
      <input type='number' value={amount} onChange={handleChange} />
      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
};

export default AmountInput;
