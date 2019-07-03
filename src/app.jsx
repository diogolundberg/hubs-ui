import React from 'react';
import { List } from './components';
import { useFetch, useQuery } from './hooks';

function App() {
  const columns = [
    { header: 'Country', accessor: 'country_id' },
    { header: 'Location', accessor: 'location' },
    { header: 'Name', accessor: 'name', width: 300 },
    { header: 'Functions', accessor: 'function' },
  ];
  const [query, params, setParams] = useQuery({ page: 1 });
  const [hubs] = useFetch(`http://localhost:9292/hubs?${query}`);

  const filter = e => setParams({ ...params, [e.target.name]: e.target.value });
  const clearFilters = () => setParams({});
  const loadMore = _ => setParams({ ...params, page: params.page + 1 });
  const sortHandler = sort => setParams({ ...params, ...sort });

  return (
    <>
      <label>
        Country
        <input type="text" name="country" onChange={event => filter(event)} />
      </label>{' '}
      <br />
      <label>
        Location
        <input type="text" name="location" onChange={event => filter(event)} />
      </label>
      <br />
      <label>
        Name
        <input type="text" name="name" onChange={event => filter(event)} />
      </label>
      <br />
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
      <br />
      <button onClick={() => clearFilters()}>reset</button>
      <button onClick={() => loadMore()}>load more</button>
      <List columns={columns} data={hubs} sortHandler={sortHandler} />
    </>
  );
}

export default App;
