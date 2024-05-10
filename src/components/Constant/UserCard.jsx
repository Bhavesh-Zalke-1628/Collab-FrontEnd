import { Button } from '@mui/material'
import React from 'react'

function UserCard({ data }) {
    console.log(data)
    return (
        <div className=' flex items-center justify-center gap-2 py-4  px-5'>
            <div
                className=' bg-gray-800 text-white font-semibold py-4 px-5 min-w-96 w-fit flex items-center justify-around'
            >

                <div>

                    <h1>{data?.name}</h1>
                    <h2>{data?.email}</h2>
                    <h1>{data?.contact}</h1>
                </div>
                <div className=' flex flex-col gap-1'>
                    <div
                        className='w-28 h-28 rounded-md overflow-hidden'
                    >
                        <img src="https://res.cloudinary.com/dyvxumoqh/image/upload/v1715310036/avatars/o8hh3wirnkoenbkyo5ad.png"
                            alt="" />
                    </div>
                    <Button
                        variant='contained'
                        color='secondary'
                        className=' lowercase mt-5'
                    >
                        User Info
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default UserCard
