import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
`;

export function TextFilter({ name, label, handler }) {
  const change = e => handler({ [e.target.name]: e.target.value });

  return (
    <Label>
      {label}
      <input type="text" name={name} onChange={change} />
    </Label>
  );
}
