import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, APP_ID } from '../constants/Api';

const useResults = () => {
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchResults = (pageNum) => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/user?page=${pageNum}&limit=15`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => {
                if (pageNum === 0) {
                    setResults(data.data);
                } else {
                    setResults([...results, ...data.data,]);
                }
            })
            .catch(console.error)
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchResults(0);
    }, []);

    return [fetchResults, results, isLoading];
};

export default useResults;