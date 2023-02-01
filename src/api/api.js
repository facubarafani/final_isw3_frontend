import axios from 'axios';

const baseURL = "http://localhost:8082/api/todo";

export function fetchAllTodos() {
    const todos = axios.get(baseURL)
        .then((response) => response.data)
    return todos;
}

export function createToDo({ title, body }) {
    axios.post(baseURL, {
        title: title,
        body: body
    })
        .then(function (response) {
            console.log(response);
        })
}