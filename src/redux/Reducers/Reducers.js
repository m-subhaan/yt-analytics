import { SET_CHANNEL_LINK_NAME, SET_KEYWORD } from '../Constants/Constants';

const initialState = {
  channelLinkName: '',
  keyword: '',
};

export const channelLinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANNEL_LINK_NAME:
      return {
        ...state,
        channelLinkName: action.payload,
      };
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      return state;
  }
};

