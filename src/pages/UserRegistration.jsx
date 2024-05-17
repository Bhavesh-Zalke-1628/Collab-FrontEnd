import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../redux/slices/registrationPaymentSlice';
import toast from 'react-hot-toast';
function UserRegistration() {
    const [open, setOpen] = useState(false);
    function PaperComponent(props) {
        return (
            <Draggable
                handle="#draggable-dialog-title"
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} />
            </Draggable>
        );
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const razorpayKey = useSelector((state) => state?.userRegistration?.RegisterKey);
    const subscription_id = useSelector((state) => state?.userRegistration?.RegistraterSubscription_id);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: ""
    }
    console.log('razorpayKey', razorpayKey)

    async function handleSubscription(e) {
        e.preventDefault();
        console.log('heello')
        if (!razorpayKey || !subscription_id) {
            toast.error("Something went wrong");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: " यवतमाळ क्रीडा संकुलन समिती",
            description: "Subscription",
            theme: {
                color: '#0000'
            },

            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;
                toast.success("Payment successfull");
                const res = await dispatch(verifyUserPayment(paymentDetails));
                console.log(res)
                console.log('navigate res', res)
                toast.success(res?.payload?.msg);
                res?.payload?.success ? navigate("/user-registration/success") : navigate("/checkout/fail");
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }






    async function load() {
        // getplan()
        await dispatch(getRazorPayId());
        await dispatch(purchaseCourseBundle());
    }


    useEffect(() => {
        load()
    }, []);

    return (
        <div>
            <div></div>
            <div className="p-8 rounded border border-gray-200 mt-10">
                <h1 className="font-medium text-3xl">Add User</h1>
                <p className="text-gray-600 mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem vel cupiditate laudantium dicta.</p>

                <>
                    <div className="mt-8 grid lg:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>
                            <input type='email' name="email" id="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
                        </div>

                        <div>
                            <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Mobile number</label>
                            <input type='number' name="job" id="job" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="+91XXXXXXXXXX" />
                        </div>
                        <div className=' flex gap-7 items-center'>
                            <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Gender</label>
                            <select className=' border px-5 py-2'>
                                <option >-Select-</option>
                                <option className=' capitalize font-semibold' value="">male</option>
                                <option className=' capitalize font-semibold' value="">female</option>
                                <option className=' capitalize font-semibold' value="">other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm text-gray-700 block mb-1 font-medium">Password</label>
                            <input type='password' name="passwords" id="passwords" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder='Pass@123' />
                        </div>
                    </div>

                    <div className="space-x-4 mt-8">
                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                            onClick={handleClickOpen}
                        >
                            Save
                        </button>

                        <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                    </div>
                </>
            </div>
            {
                <React.Fragment>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                    >
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            Subscribe
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <p className=' text-black text-xl'>
                                    नोंदणी साठी रुपये 100 आकारण्यात येत आहे
                                </p>
                            </DialogContentText>
                        </DialogContent>
                        <div className=' px-2 py-4 flex items-center justify-evenly'>
                            <div>
                                {/* <p className=' text-black font-semibold py-2'>सभासद  होण्या करी</p> */}
                                <Link
                                >
                                    <div
                                        className=' bg-green-400 text-gray-700  px-4 rounded-lg py-2 text-lg font-semibold cursor-pointer hover:bg-green-500 transition-all ease-in-out duration-300'
                                    >
                                        <button
                                            onClick={handleSubscription}
                                        >
                                            PROCED TO PAYMENT
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <Button autoFocus onClick={handleClose}>
                                Cancel
                            </Button>
                        </div>
                    </Dialog>
                </React.Fragment>
            }
        </div>
    )
}

export default UserRegistration
