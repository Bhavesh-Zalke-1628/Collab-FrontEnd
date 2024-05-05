import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserRegistration } from '../redux/slices/UserRegistrationSlice'
import UserCard from '../components/Constant/UserCard'

function Application() {
    const dispatch = useDispatch()
    const navigte = useNavigate()
    const { registerUserData } = useSelector((state) => state?.registerUser)
    console.log(registerUserData)

    async function onLoad() {
        dispatch(getUserRegistration())
    }

    useEffect(() => {

        onLoad()
    }, []);
    return (
        <div>
            {console.log(registerUserData)}

            {
                registerUserData &&
                registerUserData.map((e) => {
                    return <UserCard data={e} />
                })
            }
        </div>
    )
}

export default Application
