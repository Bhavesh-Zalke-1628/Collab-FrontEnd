import { FaRegUser } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLock2Fill } from 'react-icons/ri'
import { FaPencilAlt } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmail, isPassword } from '../Helper/regexMatcher'
import { RxCrossCircled } from 'react-icons/rx'
import { Button } from '@mui/material'
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../redux/slices/registrationPaymentSlice'
const Register = () => {
  const [registeData, setregisteData] = useState({
    username: '',
    email: '',
    password: '',
    Mo_number: ''
  })

  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const data = useSelector((state) => state?.userRegistration)
  console.log(data)
  const razorpayKey = useSelector((state) => state?.userRegistration?.RegisterKey);
  const subscription_id = useSelector((state) => state?.userRegistration?.RegistraterSubscription_id);


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
        console.log('navigate res', res)
        toast.success(res?.payload?.msg);
        res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
      }
    }
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }


  function handleUserInput(e) {
    const { name, value } = e.target
    setregisteData({
      ...registeData,
      [name]: value
    })
    console.log(registeData)
  }


  const handleRegister = async e => {
    e.preventDefault()
    console.log('hello')
    if (!registeData.username || !registeData.email || !registeData.Mo_number || !registeData.password) {
      toast.error('All field are required')
      return
    }
    // checking name field length
    if (registeData.username.length < 5) {
      toast.error('Name should be atleast of 5 characters')
      return
    }

    if (!isEmail(registeData.email)) {
      toast.error('Invalid email id')
      return
    }

    if (!isPassword(registeData.password)) {
      toast.error(
        'Password should be 6 - 16 character long with atleast a number and special character'
      )
      return
    }

    setShow(true)

    await dispatch(getRazorPayId());
    await dispatch(purchaseCourseBundle());


    const formData = new FormData()
    formData.append('username', registeData.username)
    formData.append('email', registeData.email)
    formData.append('password', registeData.password)
    formData.append('Mo_number', registeData.Mo_number)

    console.log(formData)
    // console.log('fromData from Signup', formData)
    // const response = await dispatch(createAccount(formData))

    localStorage.setItem('data', true)
    // if (response?.payload?.success) {
    //   setShow(true)
    // }


    setregisteData({
      username: '',
      email: '',
      password: '',
      Mo_number: ''
    })

  }

  useEffect(() => {
    dispatch(getRazorPayId());
  }, []);
  return (
    <>
      <section className='authPage h-[100vh] w-[100vw] bg-blue-200'>
        <div className='container lg:flex lg:items-center  w-full  '>
          <div className='header'>
            <h3 className='   font-semibold'>Create a new account</h3>
          </div>
          <form
            onSubmit={handleRegister}
            className='lg:p-10  p-5 rounded-lg border-1 shadow-xl border-black  lg:w-[35vw]'>
            {/* <div className='inputTag'>
              <label>Register As</label>
              <div>
                <select value={role} onChange={e => setRole(e.target.value)}>
                  <option value=''>Select Role</option>
                  <option value='Employer'>Employer</option>
                  <option value='Job Seeker'>Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div> */}
            <div>
              {
                show &&
                <div className=' absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center'>
                  <div className=' w-[50%] h-3/6 bg-gray-600 rounded-lg shadow-[0_0_10px_black] flex flex-col items-center justify-center'>
                    {
                      localStorage.setItem('numberOfCourses', 0)
                    }
                    <p className=' text-black text-2xl font-semibold'>
                      you have the Rs.100 payment as the registration fee
                    </p>
                    <Button
                      onClick={handleSubscription}
                    >
                      proceed to payment
                    </Button>
                  </div>
                  <div>
                    <RxCrossCircled
                      onClick={() => setShow(false)}
                      className='text-4xl text-white absolute top-36 cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300 '
                    />
                  </div>
                </div>
              }
            </div>
            <div className='inputTag '>
              <label>Name</label>
              <div className='flex  item-center '>
                <input
                  type='text'
                  placeholder='Zeeshan'
                  name='username'
                  value={registeData.username}
                  onChange={handleUserInput}
                />
                <FaPencilAlt />
              </div>
            </div>
            <div className='inputTag'>
              <label>Email Address</label>
              <div className='flex  item-center '>
                <input
                  type='email'
                  placeholder='zk@gmail.com'
                  name='email'
                  value={registeData.email}
                  onChange={handleUserInput}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className='inputTag'>
              <label>Phone Number</label>
              <div className='flex  item-center '>
                <input
                  type='number'
                  placeholder='12345678'
                  name='Mo_number'
                  value={registeData.Mo_number}
                  onChange={handleUserInput}
                />
                <FaPhoneFlip />
              </div>
            </div>
            <div className='inputTag'>
              <label>Password</label>
              <div className='flex  item-center '>
                <input
                  type='password'
                  placeholder='Your Password'
                  name='password'
                  value={registeData.password}
                  onChange={handleUserInput}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button
              type='submit'
            >
              Register
            </button>
            <Link to={'/login'}>Login Now</Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register




