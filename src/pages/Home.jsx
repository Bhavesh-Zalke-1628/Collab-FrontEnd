import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='bg-yellow-700 h-[100vh]' >
        {/* <div>
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
        </div> */}
        <div>
          <div className=' w-full h-32 bg-slate-200'></div>
          <div
            className='flex items-center  rounded-xl *:justify-between m-10 bg-gray-100 lg:flex-none '
          >
            <div className='img w-[95vh]'>
              <img
                className='rounded-xl'
                src='https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
            </div>
            <div className='sport-info bg-white  shadow-xl flex flex-col justify-center items-center w-[45vw] h-[35vh]'>
              <h1 className='text-[3rem]'>swimming and coaching</h1>
              <div className='ml-96 mt-11'>
                <Link
                  to='batches'
                >
                  <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    get start
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home