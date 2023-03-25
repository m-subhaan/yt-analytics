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
