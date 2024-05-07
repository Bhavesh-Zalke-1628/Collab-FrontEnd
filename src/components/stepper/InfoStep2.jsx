import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { uploadFitness } from '../../redux/slices/UserRegistrationSlice'

const InfoStep2 = () => {

    const [pdf, setPdf] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data._id)

    async function handleFileChange(e) {
        const file = e.target.files[0]
        console.log(file.name)
        console.log(file.type == 'application/pdf')
        // Optionally, you can validate the file type here
        if (file && file.type === 'application/pdf') {
            setPdf(file)
            console.log(pdf)
        } else {
            setPdf(null)
            alert('Please select a PDF file.')
        }
    }

    console.log(pdf)

    const formData = new FormData()
    formData.append('fitness', pdf)

    async function handleSubmit(e) {
        e.preventDefault()
        if (!pdf) {
            alert('please select file')
            return
        }
        const response = dispatch(uploadFitness([formData, data._id]))
        console.log(response)
    }
    return (
        <div>
            <div className=' flex items-center  justify-around bg-slate-100 p-5 m-5 shadow-md'>
                <div className='flex items-center justify-center'>
                    <input
                        type='file'
                        required
                        placeholder='Enter your File..'
                        className='bg-transparent px-2 py-1 border'
                        onChange={handleFileChange}
                        accept=' application/pdf'
                    />
                </div>
                <div className='flex gap-5'>
                    <button
                        type='button'
                        class='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                        onClick={handleSubmit}
                    >
                        upload file
                    </button>
                    <button
                        type='button'
                        className='text-white bg-gradient-to-r flex gap-2 text-lg  items-center justify-center  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 '
                    >
                        <FaEye />
                        view docs
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoStep2