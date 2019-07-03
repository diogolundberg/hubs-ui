import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { truncatedCell } from './truncated-cell';
import { SortIcon } from './sort-icon';

const Th = styled.th`
  ${truncatedCell}
`;

export function Header({ columns, sortHandler }) {
  const [state, setState] = useState({});
  const callback = useCallback(() => sortHandler(state), [sortHandler, state]);

  useEffect(() => callback(state), [callback, state]);

  function sort(accessor) {
    let direction = 'asc';
    if (state.sort === accessor && state.direction === 'asc') {
      direction = 'desc';
    }
    setState({ sort: accessor, direction: direction });
  }

  const ths = columns.map(column => {
    const { width, accessor, header } = column;
    const iconDirection = accessor === state.sort ? state.direction : null;

    return (
      <Th width={width} key={accessor} onClick={() => sort(accessor)}>
        <SortIcon direction={iconDirection} />
        {header}
      </Th>
    );
  });

  return <tr>{ths}</tr>;
}
