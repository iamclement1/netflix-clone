import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Bg from '../assets/bg.jpg'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('')
        try {
            logIn(email, password)
            navigate('/')
        } catch(error) {
            console.log(error)
            setError(error.message)
        }
    }
    return (
        <>
        <div className="w-full h-screen">
                <img src={Bg} alt="background__image"
                    className="hidden sm:block absolute w-full h-full object-cover" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen  "></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[400px] h-[480px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16 ">
                            <h1 className="text-3xl font-bold">Sign In</h1>
                            { error ? <p className="p-3 bg-red-300 my-2"> {error} </p> : null }
                            <form className="w-full flex flex-col py-4">
                                <div>
                                    <input type="email" placeholder="Email" autoComplete="Email"
                                        className="p-3 my-2 bg-gray-700 rounded w-full"
                                        onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password"
                                        className="p-3 my-2 bg-gray-700 rounded w-full"
                                        onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'
                                onClick={handleSubmit}>
                                    Sign In
                                </button>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <p>
                                        <input type="checkbox" className="mr-2" /> Remember me
                                    </p>
                                    <p>
                                        Need help?
                                    </p>
                                </div>
                                <p className="py-8 "><span className="text-gray-600"> New to Neflix? </span> {' '}
                                    <Link to="/signup">
                                        Sign Up
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login