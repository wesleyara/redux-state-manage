import React, { ReactNode } from "react";
import { Provider } from "react-redux";

import store from "../../redux/store";

interface IRSMProvider {
  children: ReactNode;
}

export const RSMProvider = ({ children }: IRSMProvider) => {
  return <Provider store={store}>{children}</Provider>;
};
