import { SET_CHANNEL_LINK_NAME } from '../Constants/Constants';

export const setChannelLinkName = (linkName) => ({
  type: SET_CHANNEL_LINK_NAME,
  payload: linkName,
});