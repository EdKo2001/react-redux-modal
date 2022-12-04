import { FC, useEffect, useRef } from "react";

import FlyingFormHeader from "./FlyingForm/Header";
import FlyingFormBody from "./FlyingForm/Body";

import { useAppSelector } from "../../app/hooks";

interface CreatePostProps {
  modalType: string;
  level: number;
}

const CreatePost: FC<CreatePostProps> = ({ modalType, level }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const activeModals = useAppSelector((state) => state.flyingForm.activeModals);

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
      <FlyingFormHeader modalType={modalType} title="Create Post" />
      <FlyingFormBody style={{ minHeight: 400 }}>
        <>Create Post Body</>
      </FlyingFormBody>
    </div>
  );
};

export default CreatePost;
