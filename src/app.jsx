import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Header, List } from "./components";

function App() {
  const columns = ["country", "location", "name", "status", "function"];
  const input = useRef();

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:9292/hubs?${query}`);
      setData(result.data);
    };

    fetchData();
  }, [query]);

  return (
    <>
      <Header />
      <input type="text" ref={input} />
      <button onClick={() => setQuery(input.current.value)}>GO!</button>
      <List className="center" data={data} columns={columns} />
    </>
  );
}

export default App;
