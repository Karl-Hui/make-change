import React, { useState } from 'react';
import AmountInput from './AmountInput';
import ChangeResult from './ChangeResult';
import makeChange from './makeChange'; // Import the makeChange function

const App = () => {
  const [change, setChange] = useState(null);

  const calculateChange = (amount) => {
    const newChange = makeChange(amount);
    setChange(newChange);
  };

  return (
    <div>
      <h1>Money Change App</h1>
      <AmountInput onSubmit={calculateChange} />
      {change && <ChangeResult change={change} />}
    </div>
  );
};

export default App;
