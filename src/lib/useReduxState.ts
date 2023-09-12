import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../@types";
import { setState } from "../redux/stateSlice";

export const useMutateState = (id: string, data: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setState({ id, data }));
  }, []);
};

export const useReduxState = (id: string, data: any) => {
  useMutateState(id, data);

  const { data: state } = useSelector((state: IState) =>
    state.state.data[id] ? state.state.data[id] : state.state.data.default,
  );

  return [state, useMutateState];
};
