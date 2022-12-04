import { useDispatch } from "react-redux";

import { showModal } from "./features/flyingModal/flyingModalSlice";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() => dispatch(showModal({ modalType: "CREATE_POST" }))}
        className="button"
        style={{
          background: "#f6ffed",
          border: "1px solid #b7eb8f",
          color: "black",
        }}
      >
        Show Create Post Modal
      </button>
      <button
        onClick={() => dispatch(showModal({ modalType: "EDIT_POST" }))}
        className="button"
      >
        Show Edit Post Modal
      </button>
    </div>
  );
};

export default App;
