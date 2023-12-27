import Link from 'next/link'

const TodoItem = ({ data, onDelete }) => {

    // const handleDelete = (id) => {
    //     console.log("handle delete--", id)
    // }
    return (
        <div
            className="bg-gray-100 w-full flex my-2 py-3"
        >
            <span
                className="inline-block grow-1 px-5"
            >{data.title}
            </span>
            <span className="inline-block grow-1 px-5 ml-auto text-sm opacity-50">{data.completed ? "completed" : ""}</span>
            <Link
                className="btn btn-primary btn-sm mx-1"
                href={`todos/${data.id}`}
            >Edit</Link>
            <button
                className="btn btn-error btn-sm mx-1"
                onClick={() => onDelete(data.id)}
            >Delete</button>
        </div>
    )
}
export default TodoItem