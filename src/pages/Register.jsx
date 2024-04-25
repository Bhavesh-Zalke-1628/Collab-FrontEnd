import { FaRegUser } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiLock2Fill } from 'react-icons/ri'
import { FaPencilAlt } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { createAccount } from '../redux/slices/authSlices'
import { useDispatch } from 'react-redux'
import { isEmail, isPassword } from '../Helper/regexMatcher'

const Register = () => {
  const [registeData, setregisteData] = useState({
    username: '',
    email: '',
    password: '',
    Mo_number: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

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



    console.log('dat')
    // checking name field length
    // if (registeData.username.length < 5) {
    //   toast.error('Name should be atleast of 5 characters')
    //   return
    // }

    // if (!isEmail(registeData.email)) {
    //   toast.error('Invalid email id')
    //   return
    // }

    // if (!isPassword(registeData.password)) {
    //   toast.error(
    //     'Password should be 6 - 16 character long with atleast a number and special character'
    //   )
    //   return
    // }


    console.log("All data available", registeData)
    const formData = new FormData()
    formData.append('username', registeData.username)
    formData.append('email', registeData.email)
    formData.append('password', registeData.password)
    formData.append('Mo_number', registeData.Mo_number)

    console.log(formData)
    // console.log('fromData from Signup', formData)

    const response = await dispatch(createAccount(formData))
    console.log('one', response)

    console.log('two', response.payload)

    localStorage.setItem('data', true)
    if (response?.payload?.success) {
      navigate('/admin/login')
    }

    setregisteData({
      username: '',
      email: '',
      password: '',
      Mo_number: ''
    })
  }

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
