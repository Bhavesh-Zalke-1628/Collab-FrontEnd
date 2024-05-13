// import React from 'react'
// import Typewriter from 'typewriter-effect'
// import HomeCrousal from './HomeCrousal'
// import { useSelector } from 'react-redux'

// const Home = () => {
//   const { data } = useSelector((state) => state?.auth)

//   return (
//     <>
//       <main>
//         {/* section hero  */}
//         <section>
//           <div className=' relative bg-gray-100   sm:grid grid-cols-5 grid-rows-2 px-4 py-6  space-y-6 sm:space-y-0 sm:gap-4'>
//             <div className='  h-52 col-span-4 bg-gradient-to-tr from-indigo-800 to-indigo-500 rounded-md  lg:flex     lg:items-center  sm:flex   lg:justify-between lg:px-5 items-center'>
//               <div className='logo lg:flex lg:items-center lg:gap-2 '>
//                 <img
//                   src=''
//                   alt='mainLogo'
//                   className='w-[200px] h-[200px] bg-white rounded-full'
//                 />
//                 <div>
//                   <h2 className='text-white text-4xl'>
//                     यवतमाळ क्रीडा संकुलन समिति
//                   </h2>
//                   <p className='text-indigo-100 mt-4 capitalize font-thin tracking-wider leading-7'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Sed, dolore?
//                   </p>
//                 </div>
//               </div>
//               <div className='ml-20 w-80'>
//                 {/* <h2 className='text-white text-4xl'>Adsla</h2> */}
//                 <div className='text-2xl text-white'>
//                   <Typewriter
//                     options={{
//                       strings: ['swimming ', ' coaching', 'food and fun  '],
//                       autoStart: true,
//                       loop: true,
//                       cursor: '',
//                       wrapperClassName: 'typewriterpara'
//                     }}
//                   />
//                 </div>
//                 {
//                   data.role == 'User' &&
//                   <a
//                     href='/services'
//                     className='uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100'
//                   >
//                     get start
//                   </a>
//                 }
//               </div>
//             </div>
//             <div className='col-span-1   '>
//               <div className='bg-white py-3 px-4 rounded-lg flex justify-around items-center '>
//                 <input
//                   type='text'
//                   placeholder='seach'
//                   className=' bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2'
//                 />
//                 <span>
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     className='h-6 w-6'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     stroke='currentColor '
//                   >
//                     <path
//                       stroke-linecap='round'
//                       stroke-linejoin='round'
//                       stroke-width='2'
//                       d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <div className='bg-white  rounded-md'>
//                 <h1 className='text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600'>
//                   Service
//                 </h1>
//                 <div className='bg-white rounded-md list-none  text-center '>
//                   <li className='py-3 border-b-2'>
//                     <a href='#' className='list-none  hover:text-indigo-600'>
//                       Models
//                     </a>
//                   </li>
//                   <li className='py-3 border-b-2'>
//                     <a href='#' className='list-none  hover:text-indigo-600'>
//                       Pricing
//                     </a>
//                   </li>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='  absolute  top-96  w-screen'>
//             <HomeCrousal />
//           </div>
//         </section>
//       </main >
//     </>
//   )
// }

// export default Home


import React from 'react'
import Typewriter from 'typewriter-effect'
import HomeCrousal from './HomeCrousal'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='bg-cyan-700 h-[100vh]'>
        <div>
          <div>
            <div className=' w-full h-32 bg-slate-200'></div>
            <div
              className='flex items-center  rounded-xl
 justify-between m-10 bg-gray-100 lg:flex-none '
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
                    to='services'
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
      </div>
    </>
  )
}

export default Home