import { SET_CHANNEL_LINK_NAME, SET_KEYWORD } from '../Constants/Constants';

export const setChannelLinkName = (linkName) => ({
  type: SET_CHANNEL_LINK_NAME,
  payload: linkName,
});

export const setKeyword = (keyword) => ({
  type: SET_KEYWORD,
  payload: keyword,
});