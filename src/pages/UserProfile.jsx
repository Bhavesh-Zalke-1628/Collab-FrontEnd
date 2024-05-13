import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUSer } from '../redux/slices/UserRegistrationSlice';

function UserProfile() {
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data._id)
    const dispatch = useDispatch()
    const res = dispatch(getSingleUSer(data._id))

    return (
        <div className=' min-h-[82vh] flex items-center justify-center gap-2 flex-wrap'>
            <div className=' w-fit px-5 py-4 rounded-md h-28 bg-yellow-500 '>
                <h1>
                    {data?.username}
                </h1>
                <h1>
                    {data?.email}
                </h1>
                <h1>
                    {data?.Mo_number}
                </h1>
            </div>

        </div >

    )
}

export default UserProfile
