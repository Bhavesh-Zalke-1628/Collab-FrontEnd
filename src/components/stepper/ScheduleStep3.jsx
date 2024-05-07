import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { getRazorPayId, purchaseCourseBundle } from '../../redux/slices/paymentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ScheduleStep3 = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    const data = JSON.parse(localStorage.getItem('userData'))

    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: ""
    }

    async function handleSubscription(e) {
        e.preventDefault();
        if (!razorpayKey || !subscription_id) {
            toast.error("Something went wrong");
            return;
        }
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
                const res = await dispatch(verifyUserPayment([paymentDetails, data._id]));
                console.log('navigate res', res)
                toast.success(res?.payload?.msg);
                res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    async function load() {
        await dispatch(getRazorPayId(data._id));
        await dispatch(purchaseCourseBundle(data._id));
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <div>
            <div>
                <div className='flex gap-2'>
                    <a
                        href='#'
                        class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative'
                    >
                        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            plan under 18
                        </h5>
                        <p class='font-normal text-gray-700 dark:text-gray-400'>
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <input
                            className=' absolute   right-0 w-20  border-2 '
                            type='radio'
                        />
                    </a>
                    <a
                        href='#'
                        class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative'
                    >
                        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            plan 18 + coaching
                        </h5>
                        <p class='font-normal text-gray-700 dark:text-gray-400'>
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <input
                            className=' absolute   right-0 w-20  border-2 '
                            type='radio'
                        />
                    </a>
                    <a
                        href='#'
                        class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative'
                    >
                        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            plan above 18
                        </h5>
                        <p class='font-normal text-gray-700 dark:text-gray-400'>
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <input
                            className=' absolute  right-0 w-20  border-2 '
                            type='radio'
                        />
                    </a>

                    <a
                        href='#'
                        class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative'
                    >
                        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            plan above 18 + coaching
                        </h5>
                        <p class='font-normal text-gray-700 dark:text-gray-400'>
                            Here are the biggest enterprise technology acquisitions of 2021 so
                            far, in reverse chronological order.
                        </p>
                        <input
                            className=' absolute   right-0 w-20  border-2 '
                            type='radio'
                        />
                    </a>
                </div>

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
                            <option value='US'>male</option>
                            <option value='CA'>felmale</option>
                            <option value='FR'>others</option>
                        </select>
                    </form>

                    <form class='max-w-sm mx-auto'>
                        <label
                            for='countries'
                            class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            Select an option
                        </label>
                        <select
                            id='countries'
                            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        >
                            <option selected>Choose a time</option>
                            <option value='US'>morming</option>
                            <option value='CA'>after noon</option>
                            <option value='FR'>evening</option>
                        </select>
                    </form>
                </div>
            </div>
            <Button
                variant='contained'
                color='secondary'
                className=' mr-5'
                onClick={handleSubscription}
            >
                save and Continue
            </Button>
        </div>
    )
}

export default ScheduleStep3