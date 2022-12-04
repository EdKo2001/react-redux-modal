import { FC } from "react";

import { useAppSelector } from "../../../../app/hooks";

interface BackButtonProps {
  modalType: string;
  handleCancel: () => void;
}

const BackButton: FC<BackButtonProps> = ({ modalType, handleCancel }) => {
  const activeModals = useAppSelector((state) => state.flyingForm.activeModals);

  return activeModals.length > 1 &&
    activeModals.length - 1 ===
      activeModals.findIndex(
        (activeModal) => activeModal.modalType === modalType
      ) ? (
    <button type="button" className="flying-form__back" onClick={handleCancel}>
      <img src="/images/back.svg" alt="modal-back" />
    </button>
  ) : (
    <></>
  );
};

export default BackButton;
