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
    const [male, setmale] = useState(true)
    const [morning, setmorning] = useState()
    const [data, setData] = useState()
    console.log('start')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function getplan() {
        const response = await axios.get('http://localhost:5000/api/plan/getAllPlan')
        setData(response.data)
    }

    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    console.log('subscription_id', subscription_id)


    const userData = (localStorage.getItem('userData'))
    console.log('dataBase', userData._id)

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
                paymentDetails.id = userData._id
                toast.success("Payment successfull");
                const res = await dispatch(verifyUserPayment(paymentDetails));
                console.log('navigate res', res)
                toast.success(res?.payload?.msg);
                console.log(res?.payload?.success)
                res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }




    async function load() {
        getplan()
        await dispatch(getRazorPayId());
        await dispatch(purchaseCourseBundle(userData._id));
    }


    useEffect(() => {
        load()
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

                <div className=' flex items-center justify-center gap-10 mt-4'>
                    <div className='flex items-center justify-center bg-yellow-50 gap-5 mt-4 px-5 py-5' >

                        <FormControl>
                            <h1 className=' capitalize font-semibold text-xl'>
                                Morning batch
                            </h1>
                            <RadioGroup
                                aria-labelledby='demo-radio-buttons-group-label'
                                defaultValue=' 7:00 to 8:00'
                                name='radio-buttons-group'
                            >
                                <div className=' flex items-center gap-5'>
                                    <FormControlLabel
                                        value=' 7:00 to 8:00'
                                        control={<Radio />}
                                        label='7:00 to 8:00'
                                    />
                                    <p>
                                        enroll = 10
                                    </p>
                                    <p>
                                        blank = 70
                                    </p>
                                </div>  <div className=' flex items-center gap-5'>
                                    <FormControlLabel
                                        value=' 8:00 to 9:00'
                                        control={<Radio />}
                                        label='8:00 to 9:00'
                                    />
                                    <p>
                                        enroll = 10
                                    </p>
                                    <p>
                                        blank = 70
                                    </p>
                                </div>  <div className=' flex items-center gap-5'>
                                    <FormControlLabel
                                        value=' 9:00 to 10:00'
                                        control={<Radio />}
                                        label='9:00 to 10:00'
                                    />
                                    <p>
                                        enroll = 10
                                    </p>
                                    <p>
                                        blank = 70
                                    </p>
                                </div>
                            </RadioGroup>
                        </FormControl>

                    </div>
                    <div className='flex items-center justify-center bg-yellow-50 gap-5 mt-4 px-5 py-5' >

                        <FormControl>
                            <h1 className=' text-xl capitalize font-semibold'>
                                evening batch
                            </h1>
                            <RadioGroup
                                aria-labelledby='demo-radio-buttons-group-label'
                                defaultValue=' 7:00 to 8:00'
                                name='radio-buttons-group'
                            >
                                <div className=' flex items-center gap-5'>
                                    <FormControlLabel
                                        value=' 7:00 to 8:00'
                                        control={<Radio />}
                                        label='7:00 to 8:00'
                                    />
                                    <p>
                                        enroll = 10
                                    </p>
                                    <p>
                                        blank = 70
                                    </p>
                                </div>  <div className=' flex items-center gap-5'>
                                    <FormControlLabel
                                        value=' 8:00 to 9:00'
                                        control={<Radio />}
                                        label='8:00 to 9:00'
                                    />
                                    <p>
                                        enroll = 10
                                    </p>
                                    <p>
                                        blank = 70
                                    </p>
                                </div>  <div className=' flex items-center gap-5'>
                                    <FormControlLabel
                                        value=' 9:00 to 10:00'
                                        control={<Radio />}
                                        label='9:00 to 10:00'
                                    />
                                    <p>
                                        enroll = 10
                                    </p>
                                    <p>
                                        blank = 70
                                    </p>
                                </div>
                            </RadioGroup>
                        </FormControl>

                    </div>
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