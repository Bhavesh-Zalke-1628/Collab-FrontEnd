import { Button, FormControlLabel, Radio } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../../redux/slices/paymentSlice';
import { useNavigate } from 'react-router-dom';

function PlanCard({ plan }) {
    // console.log(plan)
    const [selectedCard, setSelectedCard] = useState(null);

    // Handle radio button change
    const handleRadioChange = (index) => {
        setSelectedCard(index);

    };


    console.log(plan)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [batchData, setBatchData] = useState({
        batch: "",
        batchTime: ""
    })

    function hadleInputChange(e) {
        const { name, value } = e.target;
        setBatchData({
            ...batchData,
            [name]: value
        })
    }

    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    console.log('subscription_id', subscription_id)

    const userData = JSON.parse(localStorage.getItem('userData'))
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
        await dispatch(getRazorPayId());
        await dispatch(purchaseCourseBundle(userData._id));
    }


    useEffect(() => {
        load()
    }, []);

    return (
        <>
            {
                plan && plan.map((card, index) =>
                    <a
                        className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative min-w-72'
                    >
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            {card.planName}
                        </h5>
                        <div className='text-4xl font-semibold'>
                            {card.price}
                        </div>
                        <FormControlLabel
                            value='under 18 with coaching'
                            control={<Radio />}
                            label={card.planName}
                            name="cardRadio"
                            checked={selectedCard === index}
                            onChange={() => handleRadioChange(index)}
                        />
                    </a>
                )
            }

        </>
    )
}

export default PlanCard
