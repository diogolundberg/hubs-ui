import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState({ loading: true });
  const [error, setError] = useState();
  useEffect(() => {
    let active = true;
    fetch(url)
      .then(response => response.json())
      .then(data => active && setData(data))
      .catch(error => setError(error));
    return () => (active = false);
  }, [url]);
  return [data, error];
}
