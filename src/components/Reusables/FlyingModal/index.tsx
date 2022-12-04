import { FC, ReactElement, useEffect, useRef } from "react";

import FlyingFormBody from "./Body";
import FlyingFormHeader from "./Header";

import { useAppSelector } from "../../../app/hooks";

interface FlyingModalProps {
  modalType: string;
  level: number;
  title: string;
  children: ReactElement<any, any>;
}

const FlyingModal: FC<FlyingModalProps> = ({
  modalType,
  level,
  title,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const activeModals = useAppSelector(
    (state) => state.flyingModal.activeModals
  );

  useEffect(() => {
    setTimeout(() => {
      modalRef.current?.classList.add("visible");
      if (
        activeModals.length > 1 &&
        activeModals.length - 1 ===
          activeModals.findIndex(
            (activeModal) => activeModal.modalType === modalType
          )
      ) {
        let maxHeight = 0;
        document
          .querySelectorAll(".flying-form")
          .forEach((form) =>
            maxHeight < form.clientHeight
              ? (maxHeight = form.clientHeight)
              : null
          );
        modalRef.current!.style.height = maxHeight + "px";
        modalRef.current?.classList.add("last");
      }
    }, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flying-form" ref={modalRef} style={{ zIndex: level }}>
      <FlyingFormHeader modalType={modalType} title={title} />
      <FlyingFormBody>{children}</FlyingFormBody>
    </div>
  );
};

export default FlyingModal;
