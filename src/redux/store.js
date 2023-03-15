import { configureStore } from "@reduxjs/toolkit";
import BoilerSlice from "./BoilerSlice";

const store = configureStore({
    reducer: {
      boilerSlice: BoilerSlice,
    },
});

export default store;

