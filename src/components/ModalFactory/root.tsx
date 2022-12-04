import React, { FC } from "react";
import { Provider } from "react-redux";

import ModalFactory from "./Factory";

interface ModalRootProps {
  store: any;
  modalComponents: any;
}

const ModalRoot: FC<ModalRootProps> = ({ store, modalComponents }) => {
  if (!store) {
    throw Error("Redux store must be passed as an argument to ModalRoot.");
  }

  return (
    <Provider store={store}>
      <ModalFactory modalComponents={modalComponents} />
    </Provider>
  );
};

export default ModalRoot;
