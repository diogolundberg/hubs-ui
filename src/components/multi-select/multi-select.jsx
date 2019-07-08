import React, { useState } from 'react';
import './multi-select.scss';

export function MultiSelect({ options, multiple, placeholder, label }) {
  const [state, setState] = useState({
    values: [],
    focusedValue: -1,
    isFocused: false,
    isOpen: false,
    typed: '',
  });

  const stopPropagation = e => e.stopPropagation();

  const onDeleteOption = e => {
    const { value } = e.currentTarget.dataset;

    setState(prevState => {
      const [...values] = prevState.values;
      const index = values.indexOf(value);

      values.splice(index, 1);

      return { ...prevState, values };
    });
  };

  const renderValues = () => {
    if (state.values.length === 0) {
      return <div className="placeholder">{placeholder}</div>;
    }

    return state.values.map(value => (
      <span key={value} onClick={stopPropagation} className="multiple value">
        {value}
        <span data-value={value} onClick={onDeleteOption} className="delete">
          <X />
        </span>
      </span>
    ));
  };

  const renderOptions = () => {
    if (!state.isOpen) return null;
    return <div className="options">{options.map(renderOption)}</div>;
  };

  const renderOption = (option, index) => {
    const { values, focusedValue } = state;
    const { value } = option;
    const selected = values.includes(value);

    let className = 'option';
    if (selected) className += ' selected';
    if (index === focusedValue) className += ' focused';

    return (
      <div key={value} data-value={value} className={className}>
        <span className="checkbox">{selected ? <Check /> : null}</span>
        {value}
      </div>
    );
  };

  return (
    <div className="select" tabIndex="0">
      <label className="label">{label}</label>
      <div className="selection">
        {renderValues()}
        <span className="arrow">
          {state.isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      {renderOptions()}
    </div>
  );
}

const ChevronDown = () => (
  <svg height="12" viewBox="0 0 32 32">
    <g transform="scale(1, 1)">
      <polyline
        points="6 12 16 2 26 12"
        stroke={`rgba(0,0,0)`}
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const ChevronUp = () => (
  <svg height="12" viewBox="0 0 32 32">
    <g transform="scale(1, 1)">
      <polyline
        points="6 20 16 30 26 20"
        stroke={`rgba(0,0,0)`}
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const X = () => (
  <svg height="12" viewBox="0 0 32 32">
    <g transform="scale(1, 1)">
      <polyline
        points="6 20 16 30 26 20"
        stroke={`rgba(0,0,0)`}
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <polyline
        points="6 12 16 2 26 12"
        stroke={`rgba(0,0,0)`}
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Check = () => (
  <svg height="12" viewBox="0 0 32 32">
    <g transform="scale(1, 1)">
      <polyline
        points="6 20 16 30 26 20"
        stroke={`rgba(0,0,0)`}
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <polyline
        points="6 12 16 2 26 12"
        stroke={`rgba(0,0,0)`}
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
