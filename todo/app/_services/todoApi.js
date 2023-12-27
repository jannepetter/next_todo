import axios from "axios"
const SERVER = "https://jsonplaceholder.typicode.com"

export async function getTodo(id) {
    const url = `${SERVER}/todos/${id}`
    const response = await axios.get(url)
    return response.data
}

export async function getTodosList(page) {
    let url = `${SERVER}/todos`
    if (typeof page === "number") {
        url = `${SERVER}/todos?_start=${page}&_limit=20`
    }
    const response = await axios.get(url)
    return response.data
}