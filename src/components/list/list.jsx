import React, { useState } from 'react';
import styled from 'styled-components';

const Td = styled.td`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: ${props => props.width}px;
  width: ${props => props.width}px;
`;

export function List({ columns, data, sortHandler }) {
  const [params, setParams] = useState({ direction: 'asc' });
  const header = columns.map(column => {
    const { accessor, header } = column;
    return (
      <th onClick={() => columnClick(accessor)} key={accessor}>
        {header}
      </th>
    );
  });

  function tds(item, i) {
    return columns.map(column => {
      const { accessor, width } = column;
      return (
        <Td width={width} key={`${i}${accessor}`}>
          {item[accessor]}
        </Td>
      );
    });
  }

  function columnClick(column) {
    const { sort, direction } = params;
    const reverse = direction === 'desc' ? 'asc' : 'desc';
    console.log(params);
    console.log(reverse);
    console.log(sort);
    console.log(column);
    console.log(sort === column);
    if (sort === column) setParams({ direction: reverse });
    setParams({ ...params, sort: column });
    console.log(params);
    sortHandler(params);
  }

  return (
    <>
      {data.loading ? (
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
