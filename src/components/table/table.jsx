import React from 'react';
import styled from 'styled-components';
import { truncatedCell } from './truncated-cell';
import { Header } from './header';

const Td = styled.td`
  ${truncatedCell}
`;

export function Table({ columns, data, sortHandler }) {
  function tds(item, i) {
    return columns.map(column => {
      const { accessor, width } = column;
      return (
        <Td width={width} key={i + accessor}>
          {item[accessor]}
        </Td>
      );
    });
  }

  return (
    <>
      {data.loading ? (
        <div>loading</div>
      ) : (
        <table>
          <thead>
            <Header columns={columns} sortHandler={sortHandler} />
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
