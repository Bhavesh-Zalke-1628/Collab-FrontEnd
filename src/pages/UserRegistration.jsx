import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { Link, json, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../redux/slices/registrationPaymentSlice';
import toast from 'react-hot-toast';
import { createAccount } from '../redux/slices/authSlices';
import { isEmail, isPassword } from '../Helper/regexMatcher';
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
    console.log(subscription_id)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: ""
    }

    const [registerData, setregisteData] = useState({
        username: '',
        email: '',
        password: '',
        contact: '',
        gender: ''
    })

    function handleUserInput(e) {
        const { name, value } = e.target
        setregisteData({
            ...registerData,
            [name]: value
        })
    }

    async function handleSubscription(e) {
        e.preventDefault();
        console.log('subscription_id', subscription_id)
        if (!razorpayKey || !subscription_id) {
            toast.error("Somet hing went wrong");
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
                if (res?.payload?.success) {
                    const formData = new FormData()
                    formData.append('username', registerData.username)
                    formData.append('email', registerData.email)
                    formData.append('password', registerData.password)
                    formData.append('contact', registerData.contact)
                    formData.append('gender', registerData.gender)

                    console.log(formData)
                    console.log('fromData from Signup', formData)
                    const response = await dispatch(createAccount(formData))
                    console.log(response)
                    localStorage.setItem('data', JSON.stringify(response))
                    setregisteData({
                        username: '',
                        email: '',
                        password: '',
                        contact: ''
                    })
                    res?.payload?.success ? navigate("/user-registration/success") : navigate("/checkout/fail");
                }
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    async function load() {
        // Simulate fetching data asynchronously
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(getRazorPayId())
                dispatch(purchaseCourseBundle())
                resolve();
            }, 1000);
        });
    }




    async function handleSaveButton(e) {
        e.preventDefault()
        if (!registerData.username || !registerData.email || !registerData.contact || !registerData.password) {
            toast.error('All field are required')
            return
        }
        // checking name field length
        if (registerData.username.length < 5) {
            toast.error('Name should be atleast of 5 characters')
            return
        }

        if (!isEmail(registerData.email)) {
            toast.error('Invalid email id')
            return
        }

        if (!isPassword(registerData.password)) {
            toast.error(
                'Password should be 6 - 16 character long with atleast a number and special character'
            )
            return
        }
        localStorage.setItem('userData', JSON.stringify(registerData))
        handleClickOpen()
        await load()
    }

    return (
        <div>
            <div className="p-8 rounded border border-gray-200 mt-10">
                <h1 className="font-medium text-3xl">Add User</h1>
                <p className="text-gray-600 mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem vel cupiditate laudantium dicta.</p>

                <form>
                    <div className="mt-8 grid lg:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                            <input type="text" name="username" id="username" value={registerData.username} onChange={handleUserInput} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>
                            <input type='email' name="email" id="email" value={registerData.email} onChange={handleUserInput} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
                        </div>

                        <div>
                            <label htmlFor="contact" className="text-sm text-gray-700 block mb-1 font-medium">Mobile number</label>
                            <input type='number' name="contact" id="contact" value={registerData.contact} onChange={handleUserInput} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="+91XXXXXXXXXX" />
                        </div>
                        <div className=' flex gap-7 items-center'>
                            <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Gender</label>
                            <select
                                onChange={handleUserInput}
                                value={registerData.gender}
                                name='gender'
                                id='gender'
                                className=' border px-5 py-2'
                            >
                                <option >-Select-</option>
                                <option className=' capitalize font-semibold' value="male">male</option>
                                <option className=' capitalize font-semibold' value="female">female</option>
                                <option className=' capitalize font-semibold' value="other">other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm text-gray-700 block mb-1 font-medium">Password</label>
                            <input type='password' name="password" id="password" value={registerData.password} onChange={handleUserInput} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder='Pass@123' />
                        </div>
                    </div>

                    <div className="space-x-4 mt-8">
                        <button
                            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                            onClick={handleSaveButton}
                        >
                            Save
                        </button>
                        <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                    </div>
                </form>
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
                            <Button autoFocus onClick={() => navigate(-1)}>
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



//     < Select
// labelId = 'demo-select-small-label'
// id = 'demo-select-small'
// onChange = { onInputChange }
// name = 'gender'
//     >
//                         <MenuItem value=''>
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value='male'>Male</MenuItem>
//                         <MenuItem value='female'>Female</MenuItem>
//                         <MenuItem value='other'>Other</MenuItem>
//                     </ >