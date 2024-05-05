// import React from 'react'
// import { FaEye } from 'react-icons/fa'

// const InfoStep2 = () => {




//     return (
//         <div>
//             <div className='flex   items-center justify-center  md:flex-none '>
//                 <div className='w-[50vw] mb-10 mt-5  rounded-md border-2  flex items-center flex-col shadow-xl h-[50vh]'>
//                     <div className='p-10'>
//                         <h1 className='text-lg font-semibold'>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
//                             magnam!
//                         </h1>
//                         <p>
//                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
//                             consectetur vitae sunt reprehenderit ducimus, sint corrupti. Id,
//                             officia? Modi sequi ipsum at dicta culpa quia provident totam
//                             temporibus, libero, minus adipisci eius quos aut eos porro non
//                             ducimus doloribus ipsa? Fuga quas a eaque nihil, provident nulla
//                             quisquam quaerat minima!
//                         </p>
//                     </div>
//                     <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
//                         <svg
//                             class='fill-current w-4 h-4 mr-2'
//                             xmlns='http://www.w3.org/2000/svg'
//                             viewBox='0 0 20 20'
//                         >
//                             <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
//                         </svg>
//                         <span>Download</span>
//                     </button>
//                 </div>
//             </div>
//             <h1 className=' font-semibold'>➡Please upload your Aadhar card</h1>
//             <div className=' flex items-center  justify-around bg-slate-100 p-5 m-5 shadow-md'>
//                 <div class='flex items-center justify-center  '>
//                     <label
//                         for='dropzone-file'
//                         class='flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
//                     >
//                         <div class='flex flex-col items-center justify-center pt-5 pb-6'>
//                             <svg
//                                 class='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
//                                 aria-hidden='true'
//                                 xmlns='http://www.w3.org/2000/svg'
//                                 fill='none'
//                                 viewBox='0 0 20 16'
//                             >
//                                 <path
//                                     stroke='currentColor'
//                                     stroke-linecap='round'
//                                     stroke-linejoin='round'
//                                     stroke-width='2'
//                                     d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
//                                 />
//                             </svg>
//                             <p class='mb-2 text-[0.7rem] text-gray-500 dark:text-gray-400'>
//                                 <span class='font-semibold'>Click to upload</span> or drag and
//                                 drop
//                             </p>
//                             <p class='text-[0.9rem ] text-gray-500 dark:text-gray-400'>
//                                 SVG, PNG, JPG or GIF (MAX. 800x400px)
//                             </p>
//                         </div>
//                         <input id='dropzone-file' type='file' class='hidden' onChange={getImg} />
//                     </label>
//                 </div>
//                 <button
//                     type='button'
//                     class='text-white bg-gradient-to-r flex gap-2 text-lg  items-center justify-center  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 '
//                 >
//                     <FaEye />
//                     view docs
//                 </button>
//             </div>
//             <h1 className=' font-semibold'>
//                 ➡Please upload your fitness certi.....
//             </h1>
//             <div className=' flex items-center  justify-around bg-slate-100 p-5 m-5 shadow-md'>
//                 <div class='flex items-center justify-center  '>
//                     <label
//                         for='dropzone-file'
//                         class='flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
//                     >
//                         <div className='flex flex-col items-center justify-center pt-5 pb-6'>
//                             <svg
//                                 className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
//                                 aria-hidden='true'
//                                 xmlns='http://www.w3.org/2000/svg'
//                                 fill='none'
//                                 viewBox='0 0 20 16'
//                             >
//                                 <path
//                                     stroke='currentColor'
//                                     stroke-linecap='round'
//                                     stroke-linejoin='round'
//                                     stroke-width='2'
//                                     d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
//                                 />
//                             </svg>
//                             <p className='mb-2 text-[0.7rem] text-gray-500 dark:text-gray-400'>
//                                 <span className='font-semibold'>Click to upload</span> or drag
//                                 and drop
//                             </p>
//                             <p className='text-[0.9rem ] text-gray-500 dark:text-gray-400'>
//                                 SVG, PNG, pdf or GIF (MAX. 800x400px)
//                             </p>
//                         </div>
//                         <input id='dropzone-file' type='file' className='hidden' />
//                     </label>
//                 </div>
//                 <div>
//                     <button
//                         type='button'
//                         className='text-white bg-gradient-to-r flex gap-2 text-lg  items-center justify-center  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 '
//                     >
//                         <FaEye />
//                         view docs
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default InfoStep2


import { Button } from '@mui/material'
import React from 'react'
import { FaEye } from 'react-icons/fa'

const InfoStep2 = () => {
    return (
        <div>
            <div className='flex   items-center justify-center  md:flex-none '>
                <div className='w-[50vw] mb-10 mt-5  rounded-md border-2  flex items-center flex-col shadow-xl h-[50vh]'>
                    <div className='p-10'>
                        <h1 className='text-lg font-semibold'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                            magnam!
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                            consectetur vitae sunt reprehenderit ducimus, sint corrupti. Id,
                            officia? Modi sequi ipsum at dicta culpa quia provident totam
                            temporibus, libero, minus adipisci eius quos aut eos porro non
                            ducimus doloribus ipsa? Fuga quas a eaque nihil, provident nulla
                            quisquam quaerat minima!
                        </p>
                    </div>
                    <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
                        <svg
                            class='fill-current w-4 h-4 mr-2'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                        >
                            <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
                        </svg>
                        <span>Download</span>
                    </button>
                </div>
            </div>
            <h1 className=' font-semibold'>➡Please upload your Aadhar card</h1>
            <div className=' flex items-center  justify-around bg-slate-100 p-5 m-5 shadow-md'>
                <div class='flex items-center justify-center  '>
                    <label
                        for='dropzone-file'
                        class='flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                    >
                        <div class='flex flex-col items-center justify-center pt-5 pb-6'>
                            <svg
                                class='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 16'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                                />
                            </svg>
                            <p class='mb-2 text-[0.7rem] text-gray-500 dark:text-gray-400'>
                                <span class='font-semibold'>Click to upload</span> or drag and
                                drop
                            </p>
                            <p class='text-[0.9rem ] text-gray-500 dark:text-gray-400'>
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input id='dropzone-file' type='file' class='hidden' />
                    </label>
                </div>
                <div className='flex gap-5'>
                    <button
                        type='button'
                        class='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                    >
                        upload file
                    </button>
                    <button
                        type='button'
                        class='text-white bg-gradient-to-r flex gap-2 text-lg  items-center justify-center  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 '
                    >
                        <FaEye />
                        view docs
                    </button>
                </div>
            </div>
            <h1 className=' font-semibold'>
                ➡Please upload your fitness certi.....
            </h1>
            <div className=' flex items-center  justify-around bg-slate-100 p-5 m-5 shadow-md'>
                <div class='flex items-center justify-center  '>
                    <label
                        for='dropzone-file'
                        class='flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                    >
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                            <svg
                                className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 16'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                                />
                            </svg>
                            <p className='mb-2 text-[0.7rem] text-gray-500 dark:text-gray-400'>
                                <span className='font-semibold'>Click to upload</span> or drag
                                and drop
                            </p>
                            <p className='text-[0.9rem ] text-gray-500 dark:text-gray-400'>
                                SVG, PNG, pdf or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input id='dropzone-file' type='file' className='hidden' />
                    </label>
                </div>
                <div className='flex gap-5'>
                    <button
                        type='button'
                        class='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                    >
                        upload file
                    </button>
                    <button
                        type='button'
                        className='text-white bg-gradient-to-r flex gap-2 text-lg  items-center justify-center  from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 '
                    >
                        <FaEye />
                        view docs
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoStep2