import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { uploadFitness } from '../../redux/slices/UserRegistrationSlice'
import { MdCloudUpload } from "react-icons/md";
const InfoStep2 = () => {

    const [pdf, setPdf] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data)
    async function handleFileChange(e) {
        const file = e.target.files[0]
        // Optionally, you can validate the file type here
        if (file && file.type === 'application/pdf') {
            setPdf(file)
        } else {
            setPdf(null)
            alert('Please select a PDF file.')
        }
    }


    const formData = new FormData()
    formData.append('fitness', pdf)
    formData.append('userId', data._id)

    async function handleSubmit(e) {
        e.preventDefault()
        if (!pdf) {
            alert('please select file')
            return
        }
        const response = await dispatch(uploadFitness(formData))
        console.log('response', response)
    }
    console.log(data)
    return (
        <div>
            <div className='flex items-center justify-around bg-slate-100 p-5 m-5 shadow-md'>
                <div className='flex items-center justify-center'>
                    <label className=' flex items-center justify-center flex-col border-2 hover:scale-95 px-5 py-3 rounded-lg cursor-pointer'>
                        <MdCloudUpload className='  text-4xl' />
                        upload the fitness certificate
                        <input
                            type='file'
                            required
                            placeholder='Enter your File..'
                            className='bg-transparent px-2 py-1 border hidden'
                            onChange={handleFileChange}
                            accept=' application/pdf'
                        />
                    </label>
                </div>
                <div className='flex gap-5'>
                    <button
                        type='button'
                        class='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                        onClick={handleSubmit}
                    >
                        upload file
                    </button>
                </div>
            </div>
            {/* <div className=' flex items-center justify-around bg-slate-100 p-5 m-5 shadow-md'>
                <div className='flex items-center justify-center'>
                    <label className=' flex items-center justify-center flex-col border-2 hover:scale-95 px-5 py-3 rounded-lg cursor-pointer'>
                        <MdCloudUpload className='  text-4xl' />
                        upload aadhar card
                        <input
                            type='file'
                            required
                            placeholder='Enter your File..'
                            className='bg-transparent px-2 py-1 border hidden'
                            onChange={handleFileChange}
                            accept=' application/pdf'
                        />
                    </label>
                </div>
                <div className='flex gap-5'>
                    <button
                        type='button'
                        class='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                        onClick={handleSubmit}
                    >
                        upload file
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default InfoStep2