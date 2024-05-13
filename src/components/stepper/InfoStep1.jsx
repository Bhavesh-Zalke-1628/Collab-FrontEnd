import { TextField } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { BsPersonCircle } from 'react-icons/bs'
// import Button from '@mui/material/Button'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userRegistration } from '../../redux/slices/UserRegistrationSlice'
import { FourMpRounded } from '@mui/icons-material'
import toast from 'react-hot-toast'


const InfoStep1 = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [previewImage, setPreviewImage] = useState("");

    const user = useSelector((state) => state?.auth?.data)


    const [data, setData] = useState({
        name: "",
        email: '',
        contact: Number,
        address: "",
        gender: '',
        batch: '',
        alternatePhone: Number,
        profile: {
            public_url: 'Demo',
            secure_url: 'Demo'
        }
    })
    async function onInputChange(e) {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    async function handleSubmit(e) {
        if (!data.name || !data.address || !data.email || !data.contact || !data.gender || !data.alternatePhone || !data.profile || !data.batch) {
            toast.error('Fill all the details proper')
        }
        console.log('hello')

        e.preventDefault()

        const formData = new FormData()

        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('contact', data.contact)
        formData.append('address', data.address)
        formData.append('gender', data.gender)
        formData.append('batch', data.batch)
        formData.append('alternatePhone', data.alternatePhone)
        formData.append('profile', data.profile)

        const response = await dispatch(userRegistration(formData))
        console.log(response.data)
    }


    function getImage(event) {
        event.preventDefault();
        // getting the image
        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            setData({
                ...data,
                profile: uploadedImage
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
                    {/* <label
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

                        <input
                            type='file'
                        />
                    </label> */}
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <>
                                <BsPersonCircle className='w-20 h-20 rounded-full m-auto text-black' />
                                <p className=' capitalize mt-3 font-semibold  text-xl'>Upload profile picture</p>
                            </>
                        )}
                    </label>
                    <input
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
                </div>
            </div>
            <p className=' text-xl'>Enter full name</p>
            <TextField
                id='name'
                label='Enter your full name'
                variant='outlined'
                placeholder='Enter Your Name'
                fullWidth
                margin='normal'
                name='name'
                onChange={onInputChange}
                value={data.name}
            />
            <p className=' text-xl'>Enter email</p>
            <TextField
                id='email'
                label='Enter Your E-mail Address'
                variant='outlined'
                placeholder='Enter Your E-mail Address'
                fullWidth
                margin='normal'
                name='email'
                value={data.email}
                onChange={onInputChange}
            />
            <p className=' text-xl'>Enter phone number</p>
            <TextField
                id='phone-number'
                label='Phone Number'
                variant='outlined'
                fullWidth
                margin='normal'
                placeholder='Enter your phone number'
                name='contact'
                value={data.contact}
                onChange={onInputChange}
            />
            <p className=' text-xl'>Enter Alternate number</p>
            <TextField
                id='alternate-phone'
                label='Enter Your Alternate Phone'
                variant='outlined'
                placeholder='Enter Your Alternate Phone'
                fullWidth
                margin='normal'
                onChange={onInputChange}
                name='alternatePhone'
                value={data.alternatePhone}
            />
            <p className=' text-xl'>Enter address</p>
            <TextField
                id='address'
                label='address'
                variant='outlined'
                placeholder='Enter Your Address'
                fullWidth
                margin='normal'
                onChange={onInputChange}
                name='address'
                value={data.address}
            />
            <div className=' flex items-center justify-around'>
                <div className='mx-20 flex items-center gap-4'>
                    <p className=' text-xl'>please select gender</p>
                    <div>
                        <InputLabel id='demo-select-small-label'>Gender</InputLabel>
                        <Select
                            labelId='demo-select-small-label'
                            id='demo-select-small'
                            onChange={onInputChange}
                            name='gender'
                        >
                            <MenuItem value=''>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                            <MenuItem value='other'>Other</MenuItem>
                        </Select>
                    </div>
                </div>

                <Button
                    variant='contained'
                    color='secondary'
                    className=' mr-5'
                    onClick={handleSubmit}
                >
                    save and contiue
                </Button>
            </div>

        </>
    )
}

export default InfoStep1

