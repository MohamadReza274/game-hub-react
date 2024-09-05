import {useEffect, useState} from 'react';
import apiClient from "@/services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";


interface DataResponseType<T> {
    count: number;
    results: T[];
}

const UseData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient.get<DataResponseType<T>>(endPoint, {signal: controller.signal, ...requestConfig}).then((res) => {
            setData(res.data.results);
            setLoading(false);
        }).catch(error => {
            if (error instanceof CanceledError)
                return;
            setError(error.message);
        })

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return {data, error, isLoading};
};

export default UseData;