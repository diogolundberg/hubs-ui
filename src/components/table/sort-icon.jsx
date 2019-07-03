import React from 'react';

export function SortIcon({ direction }) {
  const transparency = arrow => (direction === arrow ? '1' : '0.3');

  return (
    <svg height="12" viewBox="0 0 32 32">
      <g transform="scale(1, 1)">
        <polyline
          points="6 20 16 30 26 20"
          stroke={`rgba(0,0,0,${transparency('asc')})`}
          strokeWidth="3"
          fill="none"
          strokeLinejoin="round"
        />
        <polyline
          points="6 12 16 2 26 12"
          stroke={`rgba(0,0,0,${transparency('desc')})`}
          strokeWidth="3"
          fill="none"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
