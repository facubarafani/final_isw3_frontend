import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export async function fetchAllTodos() {
    const response = await axios.get(baseURL)
    return response.data;
}

export async function createToDo({ title, body }) {
    const response = await axios.post(baseURL, {
        title: title,
        body: body
    })
}

export async function deleteAllToDo() {
    const response = await axios.delete(baseURL)
    console.log(response.data);
    return response.data;
}