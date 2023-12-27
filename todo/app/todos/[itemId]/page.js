"use client"
import { getTodo } from "@todoApi"
import { useQuery } from '@tanstack/react-query';
import TodoForm from "@components/TodoForm";
import LoadingSpinner from "@components/LoadingSpinner";


const page = ({ params }) => {
    // eslint-disable-next-line
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["todos", params.itemId],
        queryFn: () => getTodo(params.itemId)
    })
    if (isPending) {
        return (
            <LoadingSpinner></LoadingSpinner>
        )
    }
    if (isError) {
        return (
            <div>Error..{error}</div>
        )
    }
    const handleSubmit = (data) => {
        console.log("submitting update--", data)
    }

    return (
        <>
            <TodoForm
                todoData={data}
                submit_btn="Update"
                onSubmit={handleSubmit}
            ></TodoForm>
        </>
    )
}

export default page