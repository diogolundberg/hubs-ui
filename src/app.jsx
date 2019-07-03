import React from 'react';
import { Table, TextFilter } from './components';
import { useFetch, useQuery } from './hooks';

function App() {
  const columns = [
    { header: 'Country', accessor: 'country_id' },
    { header: 'Location', accessor: 'location' },
    { header: 'Name', accessor: 'name', width: 200 },
    { header: 'Functions', accessor: 'function' },
  ];
  const [query, params, setParams] = useQuery({ page: 1 });
  const [hubs] = useFetch(`http://localhost:9292/hubs?${query}`);

  const filter = e => setParams({ ...params, [e.target.name]: e.target.value });
  const clearFilters = () => setParams({ page: 1 });
  const changeParams = change => setParams({ ...params, ...change });
  const loadMore = _ => setParams({ ...params, page: params.page + 1 });

  return (
    <>
      <TextFilter name="country" label="Country" handler={changeParams} />
      <TextFilter name="location" label="Location" handler={changeParams} />
      <TextFilter name="name" label="Name" handler={changeParams} />
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
      <Table columns={columns} data={hubs} sortHandler={changeParams} />
    </>
  );
}

export default App;
