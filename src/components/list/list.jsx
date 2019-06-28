import React from "react";
import "./list.css";

export const List = ({ className, columns, data }) => {
  const header = columns.map(column => <th key={column}>{column}</th>);
  const itemData = (item, i) =>
    columns.map(column => <td key={`${i}${column}`}>{item[column]}</td>);
  const rows = data.map((item, i) => <tr key={i}>{itemData(item, i)}</tr>);

  return (
    <table className={className}>
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
