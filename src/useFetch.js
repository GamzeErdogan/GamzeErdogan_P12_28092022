import { useEffect, useState } from "react";

export const  useData = ( userId) =>{
        return useFetch("http://localhost:3000/user/" + userId);
}

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data.data))
        .catch((err) => {
            setError(err)
        })
        .finally(() => {    
            setLoading(false)
        })
    }, [url]);

    return {data, loading, error}
}

export default useFetch;
