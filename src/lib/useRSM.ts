import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setRequestState } from "../redux/requestsSlice";

export const useMutate = (url: string, id: string, fn: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fn(url)
      .then((res: any) => {
        dispatch(
          setRequestState({ id, data: res, isLoading: false, error: null }),
        );
      })
      .catch((err: any) => {
        dispatch(
          setRequestState({ id, data: null, isLoading: false, error: err }),
        );
      });
  }, []);
};

export const useRSM = (id: string, url: string, fn: any) => {
  useMutate(url, id, fn);

  const { data, error, isLoading } = useSelector((state: any) =>
    state.requests.data[id]
      ? state.requests.data[id]
      : state.requests.data.default,
  );

  return { data, error, isLoading };
};
