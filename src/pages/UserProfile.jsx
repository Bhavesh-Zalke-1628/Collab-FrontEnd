import React from 'react'
import { useSelector } from 'react-redux'

function UserProfile() {
    const { data } = useSelector((state) => state?.auth)
    console.log(data)
    return (
        <div className=' w-28 h-28 bg-yellow-500'>
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
    )
}

export default UserProfile
