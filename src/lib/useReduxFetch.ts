import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../@types";
import { setFetchState } from "../redux/fetchSlice";

export const useMutateFetch = (url: string, id: string, fn: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fn(url)
      .then((res: any) => {
        dispatch(
          setFetchState({ id, data: res, isLoading: false, error: null }),
        );
      })
      .catch((err: any) => {
        dispatch(
          setFetchState({ id, data: null, isLoading: false, error: err }),
        );
      });
  }, []);
};

export const useReduxFetch = (url: string, id: string, fn: any) => {
  useMutateFetch(url, id, fn);

  const { data, error, isLoading } = useSelector((state: IState) =>
    state.fetch.data[id] ? state.fetch.data[id] : state.fetch.data.default,
  );

  return { data, error, isLoading };
};
