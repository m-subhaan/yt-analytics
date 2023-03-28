import axios from 'axios';
import { BASE_URL } from "../constants";
import store from '../redux/store';
import { setChannelLinkName } from '../redux/Actions/Actions';

export const login = async (user, pass) => axios.post(`${BASE_URL}/users/login?email=${user}&password=${pass}`);

export const createUser = async (data) => {
    const response = await axios.post(`${BASE_URL}/users/register`, data)
    if (response.status === 200) {
        store.dispatch(setChannelLinkName(response?.data?.youtubeChannelLink));
        return true;
    }

    return response.body?.error || 'Server error'
}

export const fetchAllVideos = async (ChannelLinkName) => {
    const response = await axios.get(`${BASE_URL}/users/channels/videos/${ChannelLinkName}`)
    if (response.status === 200) {
        return response.data;
    }

    return response.body?.error || 'Server error'
}

export const fetchChannelDetails = async (ChannelLinkName) => {
    const response = await axios.get(`${BASE_URL}/users/channels/channel-details/${ChannelLinkName}`)
    if (response.status === 200) {
        return response.data;
    }

    return response.body?.error || 'Server error'
}

export const fetchChannelAverageStats = async (channelVideos) => {
    const response = await axios.post(`${BASE_URL}/users/channel/average-stats`, channelVideos)
    if (response.status === 200) {
        return response.data;
    }

    return response.body?.error || 'Server error'
}