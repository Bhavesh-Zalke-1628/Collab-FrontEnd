import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function UserProfile() {
    const { data } = useSelector((state) => state?.auth)
    console.log(data)

    return (
        <div className=' min-h-[82vh] flex flex-col text-xl items-center justify-center gap-2 flex-wrap'>
            <div className=' w-fit px-5 py-4 rounded-md min-h-[10vh] bg-yellow-500 flex items-center flex-col'>
                <p>
                    {data.username}
                </p>
                <p>
                    {data.email}
                </p>
                <p>
                    {data.contact}
                </p>
                <p>
                    {data.gender}
                </p>
            </div>
            <div className=' bg-slate-400 px-4 py-7 flex gap-2 items-center justify-center flex-col'>
                <p>Apply for batches</p>
                <Link
                    to='/process'
                >
                    <Button
                        variant='contained'
                        color='primary'
                    >
                        Apply now
                    </Button>
                </Link>
            </div>
        </div >
    )
}

export default UserProfile
