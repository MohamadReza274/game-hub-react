import {useEffect, useState} from 'react';
import apiClient from "@/services/api-client.ts";


interface DataResponseType<T> {
    count: number;
    results: T[];
}

const UseData = <T>(endPoint:string) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient.get<DataResponseType<T>>(endPoint).then((res) => {
            setData(res.data.results);
            setLoading(false);
        }).catch(error => {
            setError(error.message);
        })

        return () => controller.abort();
    },[endPoint])

    return {data, error, isLoading};
};

export default UseData;