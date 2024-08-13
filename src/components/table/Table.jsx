import React, { useState } from 'react';

export default function Table({item, index,onValueChange }) {
  const min = 0;
  const max = 5;
  const [localValue, setLocalValue] = useState('');

  const handleChange = (e) => {
    const newValue = Number(e.target.value);

    if (newValue >= min && newValue <= max) {
      setLocalValue(newValue);
      onValueChange(newValue);
    } else {
      alert(`Please enter a number between ${min} and ${max}`);
    }
  };

  return (
    <tr
      style={{
        backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff',
      }}
    >
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <input
          value={localValue} // Display nothing
          onChange={handleChange}
          placeholder=''
          type='number'
          min='1'
          max='5'
        />
      </td>
    </tr>
  );
}


