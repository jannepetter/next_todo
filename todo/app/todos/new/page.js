"use client"
import TodoForm from "@components/TodoForm";
import React from "react";

const page = () => {

    const handleSubmit = (data) => {
        console.log("submitting new--", data)
    }
    return (
        <>
            <TodoForm
                onSubmit={handleSubmit}
            ></TodoForm>
        </>
    )
}

export default page