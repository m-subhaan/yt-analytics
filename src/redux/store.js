import { configureStore } from '@reduxjs/toolkit';
import { channelLinkReducer } from './Reducers/Reducers';

const store = configureStore({
  reducer: {
    channelLink: channelLinkReducer,
  },
});

export default store;