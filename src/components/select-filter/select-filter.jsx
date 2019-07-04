import React from 'react';

export function SelectFilter({ name, data, handler }) {
  const change = e => handler({ [e.target.name]: e.target.value });

  return (
    <>
      {data.loading ? (
        <div>loading</div>
      ) : (
        <select name={name} onChange={change}>
          {data.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}
    </>
  );
}
