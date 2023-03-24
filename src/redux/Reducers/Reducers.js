import { SET_CHANNEL_LINK_NAME } from '../Constants/Constants';

const initialState = {
  channelLinkName: '',
};

export const channelLinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNEL_LINK_NAME:
      return {
        ...state,
        channelLinkName: action.payload,
      };
    default:
      return state;
  }
};

