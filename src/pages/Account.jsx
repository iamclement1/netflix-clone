import React from 'react'
import Bg from '../assets/bg.jpg'
import SavedMovies from '../components/SavedMovies'
const Account = () => {
    return (
        <>
            <div className="w-full text-white">
                <img src={Bg} alt="background__image"
                    className="w-full h-[400px] object-cover" />
                <div className="w-full h-[550px] bg-black/60 fixed top-0 left-0"></div>
                <div className='absolute top-[20%] p-4 md:p-8 '>
                    <h1 className="text-3xl md:text-5xl font-bold">My Movies</h1>
                </div>
            </div>

            <SavedMovies />
        </>
    )
}

export default Account