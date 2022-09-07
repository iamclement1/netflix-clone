import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movies = ({item}) => {
    const [like, setLike] = useState(false)
    const [ saved, setSaved ] = useState(false)
    const { user } = UserAuth()

    // created a movie id reference, grabbing a specific user email
    const movieID = doc(db, 'users', `${user?.email}` )

    const savedMovies = async () => {
        if(user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID, {
                savedMovies: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        } else {
            alert("Please log in to save a movie")
        }
    }

    return (
        <div>
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer p-2">
                <img className='w-full h-auto block'
                    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 
                                hover:opacity-100 text-white ">
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center
                                    items-center h-full text-center'>
                        {item?.title}
                    </p>
                    <p onClick={savedMovies}>
                        {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' />
                            : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Movies
