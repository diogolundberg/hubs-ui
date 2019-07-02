import { useState, useEffect } from "react";

export function useQuery() {
    const [params, setParams] = useState({});
    const [query, setQuery] = useState('');

    useEffect(() => {
        setQuery(Object.keys(params).map(function (k) {
            if (params[k].length == 0) return '';
            return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
        }).join('&'))
    }, [params]);
    return [query, params, setParams];
}
