import { TextField } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

const InfoStep1 = () => {
    const [gender, setAge] = React.useState('')


    return (
        <>
            <div className='flex items-center justify-center mt-10'>
                <div className='flex items-center justify-center w-[70vw] md:w-[50vw] '>
                    <label
                        for='dropzone-file'
                        className='flex flex-col items-center justify-center w-[50vw] md:w-[50vw]  h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                    >
                        <p>profile photo</p>
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                            <svg
                                className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 16'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                                />
                            </svg>
                            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                                <span className='font-semibold'>Click to upload</span> or drag
                                and drop
                            </p>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input id='dropzone-file' type='file' className='hidden' />
                    </label>
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
                name='emailAddress'
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
                        // value={gender}
                        label='Age'
                    // onChange={handleChange}
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