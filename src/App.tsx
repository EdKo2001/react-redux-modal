import { Button } from "antd";

import { useDispatch } from "react-redux";

import { showModal } from "./features/flyingForm/flyingFormSlice";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Button
        size="large"
        onClick={() => dispatch(showModal({ modalType: "CREATE_POST" }))}
        style={{
          background: "#f6ffed",
          border: "1px solid #b7eb8f",
          color: "black",
        }}
      >
        Show Create Post Modal
      </Button>
      <Button
        size="large"
        type="primary"
        onClick={() => dispatch(showModal({ modalType: "EDIT_POST" }))}
      >
        Show Edit Post Modal
      </Button>
    </div>
  );
};

export default App;
