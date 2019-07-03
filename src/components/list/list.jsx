import React from 'react';
import './list.css';

export function List({ columns, data, columnClick }) {
  const { loading } = data;
  const header = columns.map(column => {
    const key = column.accessor;
    return (
      <th onClick={() => columnClick(key)} key={key}>
        {column.header}
      </th>
    );
  });

  function tds(item, i) {
    return columns.map(column => {
      const key = column.accessor;
      return (
        <td
          style={{ maxWidth: column.width, width: column.width }}
          key={`${i}${key}`}
        >
          {item[key]}
        </td>
      );
    });
  }

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <table>
          <thead>
            <tr>{header}</tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>{tds(item, i)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
