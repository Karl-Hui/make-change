import React from 'react';
import AmountInput from './AmountInput';
import ChangeResult from './ChangeResult';
import useMakeChange from './hooks/makeChange-hook';

const App = () => {
  const { change, calculateChange } = useMakeChange();

  return (
    <div>
      <h1>Money Change App</h1>
      <p>v1.1</p>
      <AmountInput onSubmit={calculateChange} />
      {change && <ChangeResult change={change} />}
    </div>
  );
};

export default App;
