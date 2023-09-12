import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setState } from "../redux/stateSlice";

export const useMutate = (url: string, id: string, fn: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fn(url)
      .then((res: any) => {
        dispatch(setState({ id, data: res, isLoading: false, error: null }));
      })
      .catch((err: any) => {
        dispatch(setState({ id, data: null, isLoading: false, error: err }));
      });
  }, []);
};

export const useRSM = (url: string, id: string, fn: any) => {
  useMutate(url, id, fn);

  const { data, error, isLoading } = useSelector((state: any) =>
    state.states.data[id] ? state.states.data[id] : state.states.data.default,
  );

  return { data, error, isLoading };
};
