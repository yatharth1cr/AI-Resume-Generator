import { createSlice } from "@reduxjs/toolkit";

// Create a slice for dark mode
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    enabled: false,
  },
  // Reducers to handle actions
  reducers: {
    // Action to toggle dark mode
    toggleDarkMode: (state) => {
      state.enabled = !state.enabled;
    },
    // Action to set dark mode to a specific value
    setDarkMode: (state, action) => {
      state.enabled = action.payload;
    },
  },
});

// Export the actions and reducer
export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
