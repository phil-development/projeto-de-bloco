import { useState, useEffect } from 'react';
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const res = await api.request({
          method,
          url,
          params,
          data,
        });
        
        setResponse(res.data);

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, [method, url, params, data]);

  return { response, loading, error };
};

export default useApi;