import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useReducer, useRef } from "react";

export enum RequestType {
  request = "request",
  success = "success",
  failure = "failure",
}

export enum RequestStatus {
  init = "init",
  error = "error",
  fetched = "fetched",
  fetching = "fetching",
}

interface State<T> {
  status: RequestStatus;
  data?: T;
  error?: string;
}

interface Cache<T> {
  [url: string]: T;
}

type Action<T> =
  | { type: RequestType.request }
  | { type: RequestType.success; payload: T }
  | { type: RequestType.failure; error: string };

export const useFetch = <T = unknown>(
  url?: string,
  options?: AxiosRequestConfig
) => {
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    status: RequestStatus.init,
    data: undefined,
    error: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case RequestType.request:
        return {
          ...state,
          status: RequestStatus.fetching,
        };
      case RequestType.success:
        return {
          ...state,
          status: RequestStatus.fetched,
          data: action.payload,
        };
      case RequestType.failure:
        return {
          ...state,
          status: RequestStatus.error,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fetchData = async () => {
      dispatch({ type: RequestType.request });

      if (cache.current[url]) {
        dispatch({ type: RequestType.success, payload: cache.current[url] });
        return;
      } else {
        try {
          const { data } = await axios(url, options);
          cache.current[url] = data;

          if (cancelRequest.current) return;

          dispatch({ type: RequestType.success, payload: data });
        } catch (error: any) {
          if (cancelRequest.current) return;

          dispatch({ type: RequestType.failure, error: error.message });
        }
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url, options]);

  return state;
};
