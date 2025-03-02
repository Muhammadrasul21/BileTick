import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  value: JSON.parse(localStorage.getItem("saved")) || [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    toggleSaved: (state, action) => {
      let index = state.value.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index < 0) {
        state.value.push(action.payload);
        toast.success("Movie saved !");
      } else {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id,
        );
        toast.error("Movie removed from saved!");
      }
      localStorage.setItem("saved", JSON.stringify(state.value));
    },
  },
});

export const { toggleSaved } = savedSlice.actions;
export default savedSlice.reducer;
