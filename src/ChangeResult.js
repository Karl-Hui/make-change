// ChangeResult.js
import React from 'react';

const ChangeResult = ({ change }) => {
  return (
    <div>
      <h2>Change:</h2>
      <div>
        <h3>Bank Notes:</h3>
        <ul>
          {Object.entries(change.紙幣).map(([note, count]) => (
            <li key={note}>{`${count} x $${note}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Coins:</h3>
        <ul>
          {Object.entries(change.硬幣).map(([coin, count]) => (
            <li key={coin}>{`${count} x $${coin}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChangeResult;
