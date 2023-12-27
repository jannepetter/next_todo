import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const style = "btn btn-ghost text-xl"
    return (
        <div className="navbar bg-base-100">
            <Link href="/todos" className={style}>Todos</Link>
            <Link href="/todos/new" className={style}>New</Link>
        </div>
    )
}

export default NavBar