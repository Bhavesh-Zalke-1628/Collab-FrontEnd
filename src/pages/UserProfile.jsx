import React from 'react'
import { useSelector } from 'react-redux'

function UserProfile() {
    const { data } = useSelector((state) => state?.auth)
    console.log(data)
    return (
        <div className=' min-h-[82vh] flex items-center justify-center'>
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
        </div>

    )
}

export default UserProfile
