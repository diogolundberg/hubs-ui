import React from "react";
import "./list.css";

export function List({ className, columns, data, columnClick }) {
  const tds = (item, i) => {
    return columns.map(column => {
      const key = column.accessor;
      return (
        <td
          style={{ maxWidth: column.width, width: column.width }}
          key={`${i}${key}`}
        >
          {item[key]}
        </td >
      );
    });
  }

  const header = columns.map(column => {
    const key = column.accessor;
    return <th onClick={() => columnClick(key)} key={key}>{column.header}</th>;
  });

  const rows = data.map((item, i) => <tr key={i}>{tds(item, i)}</tr>);

  return (
    <table className={className}>
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
