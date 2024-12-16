import { useState, useEffect, useCallback } from 'react';
import api from '../config/api';

interface UseApiOptions {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  params?: Record<string, string>;
  data?: any;
}

const useApi = <T>({ method, url, params, data }: UseApiOptions) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {

    try {
      const res = await api.request({
        method,
        url,
        params,
        data,
      });

      setResponse(res.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [method, url, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, loading, error };
};

export default useApi;