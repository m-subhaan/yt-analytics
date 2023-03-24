import axios from 'axios';
import { BASE_URL } from "../constants";
import store from '../redux/store';
import { setChannelLinkName } from '../redux/Actions/Actions';
export async function login() {
    //lay boss
    //GET /api/users/login/{email}/{password}

    try {
        return await axios(`${BASE_URL}/api/users`);
    } catch (error) {
        return error;
    }

}

export async function createUser(data) {
    const response = await axios.post(`${BASE_URL}/users/register`, data)
    if (response.status == 200) {
        console.log(response);
        store.dispatch(setChannelLinkName(response?.data?.youtubeChannelLink));
        return true;
    }

    return response.body?.error || 'Server error'

}
