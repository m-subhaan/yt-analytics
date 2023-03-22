import axios from 'axios';
import { BASE_URL } from "../../constants";
export async function getAllUsers() {

    try {
        const response = await axios(`${BASE_URL}/api/users`);
        return response.json();
    } catch (error) {
        return error;
    }

}

export async function createUser(data) {
    const response = await axios(`${BASE_URL}/users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return response.json();
}
