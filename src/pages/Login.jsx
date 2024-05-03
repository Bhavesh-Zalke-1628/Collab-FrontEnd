// import { MdOutlinemailOutline } from 'react-icons/md'
import { RiLock2Fill } from 'react-icons/ri'

import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { isemail, isPassword } from '../Helper/regexMatcher'
import { loginAdmin, loginUser } from '../redux/slices/authSlices'
import toast from 'react-hot-toast'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    function handleUserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    async function onLogin(event) {
        event.preventDefault();
        if (!loginData.email || !loginData.password) {
            toast.error("Please fill all the details");
            return;
        }

        // dispatch create account action
        const response = await dispatch(loginUser(loginData));
        console.log(response)
        if (response?.payload?.success)
            navigate('/');

        setLoginData({
            email: "",
            password: "",
        });

    }
    return (
        <>
            <section className='authPage h-[100vh] w-[100vw] bg-blue-200'>
                <div className='container lg:flex lg:items-center  w-full  '>
                    <div className='header'>
                        <h3 className='font-semibold'>login here</h3>
                    </div>
                    <form
                        noValidate
                        onSubmit={onLogin}
                        className='lg:p-10  p-5 rounded-lg border-1 shadow-xl border-black  lg:w-[35vw]'
                    >
                        <div className='inputTag'>
                            <label>email Address</label>
                            <div className='flex  item-center '>
                                <input
                                    type='email'
                                    placeholder='zk@gmail.com'
                                    value={loginData.email}
                                    onChange={handleUserInput}
                                    name='email'
                                />
                                {/* <MdOutlinemailOutline /> */}
                            </div>
                        </div>

                        <div className='inputTag'>
                            <label>Password</label>
                            <div className='flex  item-center '>
                                <input
                                    type='password'
                                    placeholder='Your Password'
                                    name='password'
                                    value={loginData.password}
                                    onChange={handleUserInput}
                                />
                                <RiLock2Fill />
                            </div>
                        </div>
                        <button
                            type='submit'
                        >
                            Login
                        </button>
                        <Link to={'/register'}>Register</Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register