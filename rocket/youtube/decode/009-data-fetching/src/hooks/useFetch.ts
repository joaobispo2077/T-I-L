import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, isFetching, error };
}
