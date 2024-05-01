import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className=' bg-orange-400 flex flex-row gap-x-2 w-full  z-20 fixed top-0 left-0 h-12  place-content-center items-center'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className={`w-400 px-4 py-2 text-white font-medium rounded-lg  'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}>Logout</button>
                    </>
                    :
                    <>
                        <Link className={`w-400 px-4 py-2 text-white font-medium rounded-lg  'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`} to={'/login'}>Login</Link>
                        <Link className={`w-400 px-4 py-2 text-white font-medium rounded-lg  'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`} to={'/register'}>Register </Link>
                    </>
            }

        </nav>
    )
}

export default Header