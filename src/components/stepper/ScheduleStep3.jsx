import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup
} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import axios from 'axios'
import { useEffect } from 'react'
import PlanCard from '../Constant/PlanCard'
import { batch, useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import {
    getRazorPayId,
    purchaseCourseBundle,
    verifyUserPayment
} from '../../redux/slices/paymentSlice'
import { useNavigate } from 'react-router-dom'
import { CloseFullscreen, Flag } from '@mui/icons-material'
import { uploadBatch } from '../../redux/slices/UserRegistrationSlice'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
}))

const ScheduleStep3 = () => {
    const [morn, setMorn] = useState(false)
    const [even, setEven] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState(null);

    const [batchData, setBatchData] = useState({
        batch: '',
        batchTime: '',
        batchVel: ''
    })

    const [data, setData] = useState()
    console.log('start')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function getplan() {
        const response = await axios.get(
            'http://localhost:5000/api/plan/getAllPlan'
        )
        setData(response.data)
    }

    const razorpayKey = useSelector(state => state?.razorpay?.key)
    const subscription_id = useSelector(state => state?.razorpay?.subscription_id)
    console.log('subscription_id', subscription_id)

    const userData = JSON.parse(localStorage.getItem('userData'))
    console.log('dataBase', userData._id)

    const paymentDetails = {
        razorpay_payment_id: '',
        razorpay_subscription_id: '',
        razorpay_signature: ''
    }

    async function handleSubscription(e) {
        e.preventDefault()
        console.log(razorpayKey, subscription_id)
        if (!razorpayKey || !subscription_id) {
            toast.error('Something went wrong')
            return
        }
        console.log('hii')

        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: 'e-Shiksha Pvt. Ltd.',
            description: 'Subscription',
            theme: {
                color: '#F37254'
            },

            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id
                paymentDetails.razorpay_signature = response.razorpay_signature
                paymentDetails.razorpay_subscription_id =
                    response.razorpay_subscription_id
                paymentDetails.id = userData._id
                toast.success('Payment successfull')
                const res = await dispatch(verifyUserPayment(paymentDetails))
                console.log('navigate res', res)
                toast.success(res?.payload?.msg)
                console.log(res?.payload?.success)
                res?.payload?.success
                    ? navigate('/checkout/success')
                    : navigate('/checkout/fail')
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    async function load() {
        getplan()
        await dispatch(getRazorPayId())
        await dispatch(purchaseCourseBundle(userData._id))
    }


    function handleUserInput(e) {
        const { name, value } = e.target
        setBatchData({
            ...batchData,
            [name]: value
        })
        if (name === 'batchTime') {
            setTimePhase(value);
        }
    }


    const setTimePhase = (time) => {
        if (time === 'AM') {
            setMorn(true);
            setEven(false);
        } else {
            setMorn(false);
            setEven(true);
        }
    };


    console.log('batchData', batchData)

    useEffect(() => {
        load()
    }, [])

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        console.log(selectedPlan)
        batchData.batch = selectedPlan
    };

    async function handleRegister(e) {
        e.preventDefault()
        const formData = new FormData()

        formData.append('batch', batchData.batch.planId)
        formData.append('batchTime', batchData.batchTime)
        formData.append('batchVel', batchData.batchVel)

        const response = await dispatch(uploadBatch(formData))
        console.log(response)
    }
    return (
        <div>
            <div className=''>
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
                        {console.log(data)}
                        <div className='flex gap-2'>
                            {
                                data && data.map((plan, index) => {
                                    return <PlanCard plan={plan} onSelect={handlePlanSelect} index={index} />
                                })
                            }
                        </div>
                    </RadioGroup>
                </FormControl>
                <div className='flex mt-10'></div>

                Morning Batches ➡️
                <div class='grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl'>
                    {/* <!-- Tile 1 --> */}
                    <div class='flex items-center p-4 bg-white rounded'>
                        <div class='flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded'>

                            <p className='  text-xl font-bold text-green-950'>79</p>
                        </div>
                        <div class='flex-grow flex flex-col ml-4'>
                            <span class='text-xl font-bold'> available 79</span>
                            <div class='flex items-center justify-between'>
                                <span class='text-gray-500'>morning 6 to 6:45</span>
                                {/* <span class='text-green-500 text-sm font-semibold ml-2'>
                  +12.6%
                </span> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Tile 2 --> */}
                    <div class='flex items-center p-4 bg-white rounded'>
                        <div class='flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded'>
                            {/* <svg
                class='w-6 h-6 fill-current text-red-700'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              > */}
                            {/* <path
                  fill-rule='evenodd'
                  d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                /> */}
                            {/* </svg> */}
                            <p className='  text-xl font-bold text-red-950'>80</p>
                        </div>
                        <div class='flex-grow flex flex-col ml-4'>
                            <span class='text-xl font-bold'>batch full</span>
                            <div class='flex items-center justify-between'>
                                <span class='text-gray-500'>morning 7 to 7:45</span>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Tile 3 --> */}
                    <div class='flex items-center p-4 bg-white rounded'>
                        <div class='flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded'>
                            <p className='  text-xl font-bold text-red-950'>75</p>
                        </div>
                        <div class='flex-grow flex flex-col ml-4'>
                            <span class='text-xl font-bold'> available 75</span>
                            <div class='flex items-center justify-between'>
                                <span class='text-gray-500'>morning 8 to 8:45</span>

                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' font-bold m-5' />

                Evening Batches ➡️
                <div class='grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl'>
                    {/* <!-- Tile 1 --> */}
                    <div class='flex items-center p-4 bg-white rounded'>
                        <div class='flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded'>

                            <p className='  text-xl font-bold text-green-950'>69</p>
                        </div>
                        <div class='flex-grow flex flex-col ml-4'>
                            <span class='text-xl font-bold'> available 69</span>
                            <div class='flex items-center justify-between'>
                                <span class='text-gray-500'>Evening 5 to 5:45</span>
                                {/* <span class='text-green-500 text-sm font-semibold ml-2'>
                  +12.6%
                </span> */}
                            </div>
                        </div>
                    </div>

                    {/* <!-- Tile 2 --> */}
                    <div class='flex items-center p-4 bg-white rounded'>
                        <div class='flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded'>

                            <p className='  text-xl font-bold text-red-950'>80</p>
                        </div>
                        <div class='flex-grow flex flex-col ml-4'>
                            <span class='text-xl font-bold'>batch full</span>
                            <div class='flex items-center justify-between'>
                                <span class='text-gray-500'>Evening 6 to 6:45</span>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Tile 3 --> */}
                    <div class='flex items-center p-4 bg-white rounded'>
                        <div class='flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded'>
                            <p className='  text-xl font-bold text-red-950'>75</p>
                        </div>
                        <div class='flex-grow flex flex-col ml-4'>
                            <span class='text-xl font-bold'> available 77</span>
                            <div class='flex items-center justify-between'>
                                <span class='text-gray-500'>Evening 7 to 7:45</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' mt-5 bg-amber-100  '>
                    <h1 className=' font-semibold text-2xl ml-44'>Select Batch Time</h1>
                    <div className='flex flex-col  '>
                        <select name="batchTime" value={batchData.batchTime} onChange={handleUserInput} >
                            <option value="">
                                -select-
                            </option>
                            <option
                                value="AM"
                            >
                                morning</option>
                            <option
                                value="PM"
                            >
                                Evening</option>
                        </select>
                    </div>
                    <div className=' cardBatchesTime '>
                        {morn && (
                            <div className=' shadow-lg w-60 h-64 bg-slate-200  flex flex-col items-center justify-center  rounded-lg'>
                                <h3 class='mb-4 font-semibold text-gray-900 dark:text-white'>
                                    select morning time
                                </h3>
                                <ul
                                    class='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                                    <li class='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                                        <div class='flex items-center ps-3'>
                                            <input
                                                id='list-radio-license'
                                                type='radio'
                                                value='7-8'
                                                checked={batchData.batchVel === "7-8"}
                                                name='batchVel'
                                                onChange={handleUserInput}
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
                                                value='8-9'
                                                checked={batchData.batchVel === "8-9"}
                                                name='batchVel'
                                                class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                                                onChange={handleUserInput}
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
                                                value='9-10'
                                                checked={batchData.batchVel === "9-10"}
                                                name='batchVel'
                                                onChange={handleUserInput}
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
                        {even && (
                            <div className=' shadow-lg w-60 h-64 bg-slate-200  flex flex-col items-center justify-center  rounded-lg'>
                                <h3 class='mb-4 font-semibold text-gray-900 dark:text-white'>
                                    select morning time
                                </h3>
                                <ul
                                    class='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                                    <li class='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                                        <div class='flex items-center ps-3'>
                                            <input
                                                id='list-radio-license'
                                                type='radio'
                                                value="7-8"
                                                name='batchVel'
                                                checked={batchData.batchVel === "7-8"}
                                                onChange={handleUserInput}
                                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
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
                                                value="8-9"
                                                name='batchVel'
                                                checked={batchData.batchVel === "8-9"}
                                                onChange={handleUserInput}
                                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
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
                                                value="9-10"
                                                name='batchVel'
                                                checked={batchData.batchVel === "9-10"}
                                                onChange={handleUserInput}
                                                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
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
            </div>
            <Button
                variant='contained'
                color='secondary'
                onClick={handleRegister}
            >
                save and continue
            </Button>
        </div>
    )
}

export default ScheduleStep3