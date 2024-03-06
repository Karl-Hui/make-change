import React, { useState } from 'react';

const bankNotes = [5, 10, 20, 50, 100];
const coins = [0.01, 0.05, 0.1, 0.25, 1, 2];

function useMakeChange() {
  const [change, setChange] = useState(null);

  const makeChange = (amount) => {
    let change = {};
    let tBankNotes = {};
    let tCoins = {};
    let total = 0;

    let cent = amount.toString().split('.')[1] % 10;

    // Rounding cents
    if (cent >= 3 && cent < 8) {
      amount = Math.floor(amount * 10) / 10 + 0.05;
    } else if (cent >= 8) {
      amount = Math.floor(amount * 10) / 10 + 0.1;
    }

    for (let i = bankNotes.length - 1; i >= 0; i--) {
      if (total >= amount) break;
      const bankNote = bankNotes[i];

      while (bankNote + total <= amount) {
        if (tBankNotes[bankNote] === undefined) {
          tBankNotes[bankNote] = 1;
        } else {
          tBankNotes[bankNote]++;
        }
        total += bankNote;
      }
    }

    for (let i = coins.length - 1; i >= 0; i--) {
      if (total >= amount) break;

      const coin = coins[i];
      while (total + coin <= amount) {
        if (tCoins[coin] === undefined) {
          tCoins[coin] = 1;
        } else {
          tCoins[coin]++;
        }
        total += coin;
      }
    }
    change = {
      tBankNotes: tBankNotes,
      tCoins: tCoins,
      total: total,
    };

    return change;
  };

  const calculateChange = (amount) => {
    const newChange = makeChange(amount);
    setChange(newChange);
  };

  return { change, calculateChange };
}

export default useMakeChange;
