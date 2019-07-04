import React from 'react';
import { SelectFilter, Table, TextFilter } from './components';
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
  const [countries] = useFetch(`http://localhost:9292/countries`);
  const [functions] = useFetch(`http://localhost:9292/functions`);

  const changeParams = change => setParams({ ...params, ...change });
  const clearFilters = () => setParams({ page: 1 });
  const loadMore = _ => setParams({ ...params, page: params.page + 1 });

  return (
    <>
      <SelectFilter name="country" data={countries} handler={changeParams} />
      <SelectFilter name="function" data={functions} handler={changeParams} />
      <TextFilter name="name" label="Name" handler={changeParams} />
      <button onClick={() => clearFilters()}>reset</button>
      <button onClick={() => loadMore()}>load more</button>
      <Table columns={columns} data={hubs} sortHandler={changeParams} />
    </>
  );
}

export default App;
