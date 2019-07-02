import React from 'react';
import { List } from './components';
import { useFetch, useQuery } from './hooks';

function App() {
  const columns = [
    { header: 'Country', accessor: 'country_id' },
    { header: 'Location', accessor: 'location' },
    { header: 'Name', accessor: 'name', width: 200 },
    { header: 'Functions', accessor: 'function' },
  ];
  const [query, params, setParams] = useQuery({ page: 1, size: 40 });
  const [data] = useFetch(`http://localhost:9292/hubs?${query}`);

  const filter = e => setParams({ ...params, [e.target.name]: e.target.value });
  const clearFilters = () => setParams({});
  const loadMore = _ => setParams({ ...params, page: params.page + 1 });
  const sort = column => {
    setParams(params => {
      const direction = params.direction === 'desc' ? 'asc' : 'desc';
      if (params.sort === column) return { ...params, direction: direction };
      return { ...params, sort: column };
    });
  };

  return (
    <>
      <label>
        Country
        <input type="text" name="country" onChange={event => filter(event)} />
      </label>
      <label>
        Location
        <input type="text" name="location" onChange={event => filter(event)} />
      </label>
      <label>
        Name
        <input type="text" name="name" onChange={event => filter(event)} />
      </label>
      <select name="function[]" onChange={event => filter(event)}>
        <option value="0">Function not known, to be specified</option>
        <option value="1">Port, as defined in Rec 16</option>
        <option value="2">Rail Terminal</option>
        <option value="3">Road Terminal</option>
        <option value="4">Airport</option>
        <option value="5">Postal Exchange Office</option>
        <option value="6">Multimodal Functions (ICDs, etc.)</option>
        <option value="7">Fixed Transport Functions (e.g. Oil platform)</option>
        <option value="8">Inland Port</option>
        <option value="B">Border Crossing</option>
      </select>
      <button onClick={() => clearFilters()}>reset</button>
      <button onClick={() => loadMore()}>load more</button>
      <List
        className="center"
        columns={columns}
        data={data}
        columnClick={sort}
      />
    </>
  );
}

export default App;
