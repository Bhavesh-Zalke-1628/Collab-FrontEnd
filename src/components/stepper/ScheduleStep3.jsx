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

const ScheduleStep3 = () => {
    const [male, setmale] = useState(true)
    const [morning, setmorning] = useState()
    const [data, setData] = useState()
    console.log('start')

    const dispatch = useDispatch()
    async function getplan() {
        const response = await axios.get('http://localhost:5000/api/plan/getAllPlan')
        setData(response.data)
    }

    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);


    const payment = useSelector((state) => state.razorpay)

    const dataSet = useSelector((state) => state?.auth?.data)

    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: ""
    }

    async function handleSubscription(e) {
        e.preventDefault();
        console.log(razorpayKey, subscription_id)
        if (!razorpayKey || !subscription_id) {
            toast.error("Something went wrong");
            return;
        }
        console.log('hii')


        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "e-Shiksha Pvt. Ltd.",
            description: "Subscription",
            theme: {
                color: '#F37254'
            },

            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;
                toast.success("Payment successfull");
                const res = await dispatch(verifyUserPayment(paymentDetails));
                console.log('navigate res', res)
                // toast.success(res?.payload?.msg);
                res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }


    const formData = new FormData()
    formData.append('userId', dataSet._id)
    async function load() {
        await dispatch(getRazorPayId());
        await dispatch(purchaseCourseBundle(formData));
    }

    useEffect(() => {
        load();
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
                                data &&
                                data.map((e) => {
                                    return <PlanCard key={e.planId} plan={e} />
                                })
                            }
                        </div>
                    </RadioGroup>
                </FormControl>

                <div className='flex mt-10'>
                    <form class='max-w-sm mx-auto'>
                        <label
                            for='countries'
                            class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            Select an gender
                        </label>
                        <select
                            id='countries'
                            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        >
                            <option selected>Choose a gender</option>
                            <option value='male'>male</option>
                            <option value='female'>female</option>
                        </select>
                    </form>
                </div>
                <div className='flex items-center justify-center'>
                    {male && (
                        <FormControl>
                            <FormLabel id='demo-radio-buttons-group-label'>
                                morning batch
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby='demo-radio-buttons-group-label'
                                defaultValue=' 7:00 to 8:00'
                                name='radio-buttons-group'
                            >
                                <FormControlLabel
                                    value=' 7:00 to 8:00'
                                    control={<Radio />}
                                    label='7:00 to 8:00'
                                />
                                <FormControlLabel
                                    value='9:00 to 11:00'
                                    control={<Radio />}
                                    label='9:00 to 11:00'
                                />
                                <FormControlLabel
                                    value='11:00 to 12:000'
                                    control={<Radio />}
                                    label='11:00 to  12:00'
                                />
                            </RadioGroup>
                        </FormControl>
                    )}
                </div>
            </div>
            <Button
                variant='contained'
                color='secondary'
                onClick={handleSubscription}
            >
                save and continue
            </Button>
        </div>
    )
}

export default ScheduleStep3