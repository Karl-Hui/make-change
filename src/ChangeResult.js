// ChangeResult.js
import React from 'react';

const ChangeResult = ({ change }) => {
  return (
    <div>
      <h2>Change:</h2>
      <div>
        <h3>Total 共需要找:</h3>
        {`$${change.total}`}
        <h3>Bank Notes 紙幣:</h3>
        <ul>
          {Object.entries(change.tBankNotes).map(([bankNote, count]) => (
            <li key={bankNote}>{`$${bankNote} x ${count}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Coins 硬幣:</h3>
        <ul>
          {Object.entries(change.tCoins).map(([coin, count]) => (
            <li key={coin}>{`$${coin} x ${count}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChangeResult;
