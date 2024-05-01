import { TextField } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { BsPersonCircle } from 'react-icons/bs'

const InfoStep1 = () => {
    const [previewImage, setPreviewImage] = useState("");

    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        contact: "",
        alternatePhone: "",
        address: "",
        gender: "",
    })



    function getImage(event) {
        event.preventDefault();
        // getting the image
        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            setUserData({
                ...userData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setPreviewImage(this.result);
            })
        }
    }




    return (
        <>
            <div className='flex items-center justify-center mt-10'>
                <div className='flex items-center justify-center w-[70vw] md:w-[50vw] '>
                    {/* <p>profile photo</p> */}
                    <label
                        for='dropzone-file'
                        className='flex flex-col items-center justify-center w-[50vw] md:w-[50vw]  h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                    >
                        <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                            {previewImage ? (
                                <>
                                    <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                                </>
                            ) : (
                                <>
                                    <span className='font-semibold'>Click to upload</span>
                                    <BsPersonCircle className='w-20 h-20 rounded-full m-auto text-white' />
                                </>
                            )}
                        </p>

                    </label>
                    <input
                        type='file'
                        className=' hidden'
                    />
                </div>
            </div>

            <TextField
                id='name'
                label='full Name'
                variant='outlined'
                placeholder='Enter Your Name'
                fullWidth
                margin='normal'
                name='name'
            />
            <TextField
                id='email'
                label='E-mail'
                variant='outlined'
                placeholder='Enter Your E-mail Address'
                fullWidth
                margin='normal'
                name='email'
            />
            <TextField
                id='phone-number'
                label='Phone Number'
                variant='outlined'
                placeholder='Enter Your Phone Number'
                fullWidth
                margin='normal'
                name='contact'
            />
            <TextField
                id='alternate-phone'
                label='Alternate Phone'
                variant='outlined'
                placeholder='Enter Your Alternate Phone'
                fullWidth
                margin='normal'
                name='alternatePhone'
            />
            <TextField
                id='alternate-phone'
                label='Alternate Phone'
                variant='outlined'
                placeholder='Enter Your Alternate Phone'
                fullWidth
                margin='normal'
                name='alternatePhone'
            />
            <TextField
                id='address'
                label='address'
                variant='outlined'
                placeholder='Enter Your Address'
                fullWidth
                margin='normal'
                name='address'
            />
            <div className='mx-20 flex items-center  justify-evenly  mb-20'>
                <div>
                    <InputLabel id='demo-select-small-label'>Gender</InputLabel>
                    <Select
                        labelId='demo-select-small-label'
                        id='demo-select-small'
                        label='Age'
                    >
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>manus</MenuItem>
                        <MenuItem value={20}>bai</MenuItem>
                        <MenuItem value={30}>Other</MenuItem>
                    </Select>
                </div>
                <div>
                    <InputLabel id='demo-select-small-label'>batches</InputLabel>
                    <Select
                        labelId='demo-select-small-label'
                        id='demo-select-small'
                        // value={batch}
                        label='Age'
                    // onChange={handleChange}
                    >
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>7-8</MenuItem>
                        <MenuItem value={20}>8-9</MenuItem>
                        <MenuItem value={30}>9-10</MenuItem>
                    </Select>
                </div>
            </div>
        </>
    )
}

export default InfoStep1