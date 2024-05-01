import React from 'react'
import { Link } from 'react-router-dom'

function Swimming() {
    return (
        <div className=' flex items-center justify-center min-h-[90vh]'>
            <div className=' bg-yellow-500 w-28 h-28 flex flex-col items-center justify-center'>
                Swimming
                <Link to='/process'>
                    <button className=' bg-yellow-50 px-2 py-2 rounded-md font-semibold'>
                        get start
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Swimming
