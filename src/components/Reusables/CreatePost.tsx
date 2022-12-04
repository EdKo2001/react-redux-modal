import { FC } from "react";

import FlyingModal from "./FlyingModal";
interface CreatePostProps {
  modalType: string;
  level: number;
}

const CreatePost: FC<CreatePostProps> = ({ modalType, level }) => {
  return (
    <FlyingModal level={level} modalType={modalType} title="Create Post">
      <div style={{ minHeight: 400 }}>Create Post Body</div>
    </FlyingModal>
  );
};

export default CreatePost;
