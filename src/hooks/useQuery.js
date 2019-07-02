import { useState, useEffect } from 'react';

export function useQuery(defaultParams) {
  const [query, setQuery] = useState('');
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    setQuery(
      Object.keys(params)
        .map(function(k) {
          if (params[k].length === 0) return '';
          return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
        })
        .join('&'),
    );
  }, [params]);
  return [query, params, setParams];
}
