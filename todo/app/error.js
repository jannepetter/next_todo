'use client'

import { useState } from "react"

const ErrMsg = ({ error, reset }) => {
    return (
        <div role="alert" className="alert alert-error">
            <span>{error.message}</span>
            <button className="btn button-error btn-xs float-right" onClick={() => reset()}>X</button>
        </div>
    )
}
export default function Error({ error, reset }) {
    const [show, setShow] = useState(true)
    return (
        <div>
            {show && <ErrMsg reset={() => setShow(false)} error={error}></ErrMsg>}
        </div>
    )

}