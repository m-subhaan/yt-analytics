import axios from 'axios';
import { BASE_URL } from "../constants";
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
    console.log(data)
    const response = await axios.post(`${BASE_URL}/users/register`, data)
    if (response.status == 200) return true;
    return response.body?.error || 'Server error'

}
