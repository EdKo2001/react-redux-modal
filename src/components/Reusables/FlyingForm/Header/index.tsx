import { FC } from "react";

import BackButton from "../BackButton";

import { useAppDispatch } from "../../../../app/hooks";

import { hideModal } from "../../../../features/flyingForm/flyingFormSlice";

interface FlyingFormHeaderProps {
  modalType: string;
  title: string;
}

const FlyingFormHeader: FC<FlyingFormHeaderProps> = ({ modalType, title }) => {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(hideModal({ modalType }));
  };

  return (
    <div className="flying-form__header">
      <BackButton modalType={modalType} handleCancel={handleCancel} />
      <div className="flying-form__header-inputTitle">
        <h3 className="flying-form__header-title">{title}</h3>
      </div>
      <button
        className="flying-form__close"
        type="button"
        onClick={handleCancel}
      >
        <img src="/images/close.svg" alt="Close New Segment" />
      </button>
    </div>
  );
};

export default FlyingFormHeader;
