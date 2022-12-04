import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeModals: [] as any[],
  config: "",
  currentLevel: 99,
};

const flyingFormSlice = createSlice({
  name: "FlyingModal",
  initialState,
  reducers: {
    showModal: (
      state,
      { payload }: { payload: { modalType: string; modalProps?: any } }
    ) => {
      state.activeModals = [
        ...state.activeModals.filter(
          (modal) => modal.modalType !== payload.modalType
        ),
        {
          ...payload,
          level: state.currentLevel + 2,
        },
      ];
      state.currentLevel = state.currentLevel + 2;
    },
    hideModal: (state, { payload }) => {
      state.activeModals = state.activeModals.filter(
        (modal) => modal.modalType !== payload.modalType
      );
      state.currentLevel =
        state.activeModals.filter(
          (modal) => modal.modalType !== payload.modalType
        ).length > 0
          ? state.currentLevel
          : 1;
    },
    hideModals: (state) => {
      state.activeModals = [];
    },
  },
});

const { reducer, actions } = flyingFormSlice;

export const { showModal, hideModal, hideModals } = actions;

export default reducer;
