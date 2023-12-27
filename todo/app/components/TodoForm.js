"use client"
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { debounce } from '@utils/functions'

const TodoForm = (props) => {
    const todoData = props.todoData
    const labelClass = "mx-5"
    const [data, setData] = useState({
        id: todoData?.id,
        title: todoData?.title,
        completed: !!todoData?.completed
    })

    const handleChange = (key, val) => {
        const newData = { ...data }
        newData[key] = val
        setData(newData)
    }

    const debouncedSubmit = useMemo(() => debounce(() => props.onSubmit(data)), [data, props])

    return (
        <div className="card card-compact w-96 bg-blue-100 shadow-xl pt-5 m-auto my-20">
            <form
                className="max-w-96 border-2 border-solid border-black-100"
                onSubmit={(e) => {
                    e.preventDefault();
                    debouncedSubmit();
                }}
            >
                <div className="my-5">
                    <label className={labelClass}>Title</label><br></br>
                    <textarea
                        rows="4"
                        className="mx-5 w-80 border-2 border-solid border-black-100"
                        value={data.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                    ></textarea>
                </div>
                <div className="my-5">
                    <label className={labelClass}>Completed: </label>
                    <input
                        type="checkbox"
                        checked={data.completed}
                        className="checkbox checkbox-sm"
                        onChange={() => handleChange("completed", !data.completed)} /><br></br>
                </div>
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <Link
                            className="btn btn-secondary"
                            href="/todos"
                        >Cancel</Link>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={typeof data.title !== "string" || data.title.length < 2}
                        >{props.submit_btn ? props.submit_btn : "Submit"}
                        </button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default TodoForm