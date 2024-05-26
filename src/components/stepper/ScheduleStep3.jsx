import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup
} from '@mui/material'
import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import axios from 'axios'
import { useEffect } from 'react'
import PlanCard from '../Constant/PlanCard'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../../redux/slices/paymentSlice'
import { useNavigate } from "react-router-dom";


const ScheduleStep3 = () => {
    const [morn, setmorn] = useState()
    const [evening, setEvening] = useState()
    const [data, setData] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function getplan() {
        const response = await axios.get('http://localhost:5000/api/plan/getAllPlan')
        setData(response.data)
    }
    useEffect(() => {
        getplan()
    }, []);

    return (
        <div>
            <div>
                <FormControl>
                    <FormLabel id='demo-radio-buttons-group-label'>
                        {' '}
                        <p className='text-4xl text-black  m-5 font-semibold p-2'>
                            ➡ please select any one batch
                        </p>
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='female'
                        name='radio-buttons-group'
                    >
                        {/* /> */}
                        <div className='flex gap-2'>
                            {
                                <PlanCard plan={data} />
                            }
                        </div>
                    </RadioGroup>
                </FormControl>

                <div className='flex justify-center bg-yellow-500  gap-4 mt-5'>
                    <div
                        class='flex items-center mb-4 '
                        onClick={() => setmorn(true)}
                    >
                        <input
                            id='default-radio-1'
                            type='radio'
                            value='morning'
                            name='batchTime'
                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                        />
                        <label
                            for='default-radio-1'
                            class='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        >
                            morning
                        </label>
                    </div>
                    <div class='flex items-center' onClick={() => setmorn(false)}>
                        <input
                            checked
                            id='default-radio-2'
                            type='radio'
                            value='evening'
                            name=' batchTime'
                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                        />
                        <label
                            for='default-radio-2'
                            class='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        >
                            Evening
                        </label>
                    </div>
                </div>

                <div className=' cardBatchesTime'>
                    {morn && (
                        <div className=' shadow-lg w-60 h-64 bg-slate-200  flex flex-col items-center justify-center  rounded-lg'>
                            <h3 class='mb-4 font-semibold text-gray-900 dark:text-white'>
                                select morning time
                            </h3>
                            <ul class='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                                <li class='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                                    <div class='flex items-center ps-3'>
                                        <input
                                            id='list-radio-license'
                                            type='radio'
                                            value=''
                                            name='list-radio'
                                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                                        />
                                        <label
                                            for='list-radio-license'
                                            class='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                        >
                                            7 to 8{' '}
                                        </label>
                                    </div>
                                </li>

                                <li class='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                                    <div class='flex items-center ps-3'>
                                        <input
                                            id='list-radio-military'
                                            type='radio'
                                            value=''
                                            name='list-radio'
                                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                                        />
                                        <label
                                            for='list-radio-military'
                                            class='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                        >
                                            8 to 9
                                        </label>
                                    </div>
                                </li>
                                <li class='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                                    <div class='flex items-center ps-3'>
                                        <input
                                            id='list-radio-passport'
                                            type='radio'
                                            value=''
                                            name='list-radio'
                                            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                                        />
                                        <label
                                            for='list-radio-passport'
                                            class='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                        >
                                            9 to 10
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>


        </div >
    )
}

export default ScheduleStep3