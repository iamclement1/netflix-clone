import React from 'react'
import { Link } from 'react-router-dom'
import Bg from '../assets/bg.jpg'

const SignUp = () => {
    return (
        <>
            <div className="w-full h-screen">
                <img src={Bg} alt="background__image"
                    className="hidden sm:block absolute w-full h-full object-cover" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen  "></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[400px] h-[480px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16 ">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <form className="w-full flex flex-col py-4">
                                <div>
                                    <input type="email" placeholder="Email" autoComplete="Email"
                                        className="p-3 my-2 bg-gray-700 rounded w-full" />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password"
                                        className="p-3 my-2 bg-gray-700 rounded w-full" />
                                </div>
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                                    Sign Up
                                </button>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <p>
                                        <input type="checkbox" className="mr-2" /> Remember me
                                    </p>
                                    <p>
                                        Need help?
                                    </p>
                                </div>
                                <p className="py-8 "><span className="text-gray-600"> Already subscribed to Neflix? </span> {' '}
                                    <Link to="/login">
                                        Sign In
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

export default SignUp
