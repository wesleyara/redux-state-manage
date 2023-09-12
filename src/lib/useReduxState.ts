import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setState } from "../redux/statesSlice";

export const useMutateState = (id: string, data: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setState({ id, data }));
  }, []);
};

export const useReduxState = (id: string, data: any) => {
  useMutateState(id, data);

  const { data: state } = useSelector((state: any) =>
    state.states.data[id] ? state.states.data[id] : state.states.data.default,
  );

  return state;
};
