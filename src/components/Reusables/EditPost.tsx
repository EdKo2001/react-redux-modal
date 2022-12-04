import { FC } from "react";

import FlyingModal from "./FlyingModal";
interface EditPostProps {
  modalType: string;
  level: number;
}

const EditPost: FC<EditPostProps> = ({ modalType, level }) => {
  return (
    <FlyingModal level={level} modalType={modalType} title="Edit Post">
      <>Edit Post Body</>
    </FlyingModal>
  );
};

export default EditPost;
