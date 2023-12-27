"use client"
import { useQuery } from '@tanstack/react-query'
import { getTodosList } from "@todoApi"
import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import TodoItem from './TodoItem'

const Todos = () => {
    const [page, setPage] = useState(0)
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["todos", { page }],
        queryFn: () => getTodosList(page)
    })

    if (isPending) {
        return (
            <LoadingSpinner></LoadingSpinner>
        )
    }
    if (isError) {
        return (
            <div>Error happened: {error}</div>
        )
    }
    const handleDelete = (id) => {
        console.log("handling delete--", id)
    }
    return (
        <div>
            {data?.map((item, idx) =>
                <TodoItem key={idx} data={item} onDelete={handleDelete}></TodoItem>
            )}
            <button
                className="btn btn-primary"
                onClick={() => setPage(page - 1)}
                disabled={page <= 0 ? true : false}
            >Prev
            </button>
            <button className="btn btn-primary"
                onClick={() => setPage(page + 1)}
            >Next
            </button>

        </div>
    )
}

export default Todos