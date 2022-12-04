import { FC } from "react";

import { useAppSelector } from "../../../app/hooks";

interface ModalFactorProps {
  modalComponents: any;
}

const ModalFactory: FC<ModalFactorProps> = ({ modalComponents }) => {
  const activeModals = useAppSelector(
    (state) => state.flyingModal.activeModals
  );

  const renderModalComponent = ({ modalType, level, modalProps }: any) => {
    if (!modalComponents || !modalComponents[modalType]) {
      return null;
    }

    const ModalComponent = modalComponents[modalType];

    return (
      <ModalComponent
        key={modalType}
        modalType={modalType}
        modalProps={modalProps}
        level={level}
      />
    );
  };

  if (!activeModals || activeModals.length < 1) {
    return null;
  }

  return (
    <div>{activeModals.map((modal: any) => renderModalComponent(modal))}</div>
  );
};

export default ModalFactory;
