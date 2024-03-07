// AmountInput.js
import React, { useState } from 'react';
import styles from './AmountInput.module.css';

const AmountInput = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount !== '') {
      onSubmit(parseFloat(amount));
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label className={styles.changesLabel} htmlFor='changes'>
          Changes
        </label>
        <input
          step='.01'
          className={styles.cusInput}
          type='number'
          value={amount}
          onChange={handleChange}
          name='changes'
          id='changes'
        />
        <button type='submit'>Calculate</button>
      </form>
    </div>
  );
};

export default AmountInput;
