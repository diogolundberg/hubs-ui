import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState({ loading: true });
    useEffect(() => {
        let active = true;
        fetch(url)
            .then(response => response.json())
            .then(data => active && setData({ data }))
            .catch(error => setData({ error }));
        return () => (active = false);
    }, [url]);
    console.log(data);
    return data;
}
