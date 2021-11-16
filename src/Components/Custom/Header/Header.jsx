import React from 'react'

//Router
import {Link} from 'react-router-dom'


const Header = () => {
    return (

        <Link to="/">
        <header className="bg-grape flex justify-center items-center h-24">
            <p className="text-center font-bold text-white text-3xl">GitHub App</p>
        </header>
        </Link>
    )
}

export default Header
