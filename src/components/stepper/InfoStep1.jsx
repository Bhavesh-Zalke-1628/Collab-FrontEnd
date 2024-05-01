// import { TextField } from '@mui/material'
// import React, { useState } from 'react'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import Select from '@mui/material/Select'
// import { BsPersonCircle } from 'react-icons/bs'

// const InfoStep1 = () => {
//     const [previewImage, setPreviewImage] = useState("");

//     const [userData, setUserData] = useState({
//         userName: "",
//         email: "",
//         contact: "",
//         alternatePhone: "",
//         address: "",
//         gender: "",
//     })


//     const [data, setData] = useState()


//     async function onInputChange(e) {
//         const { name, value } = e.target
//         setUserData({
//             ...userData,
//             [name]: value
//         })
//     }


//     console.log(userData)
//     function getImage(event) {
//         event.preventDefault();
//         // getting the image
//         const uploadedImage = event.target.files[0];

//         if (uploadedImage) {
//             setUserData({
//                 ...userData,
//                 avatar: uploadedImage
//             });
//             const fileReader = new FileReader();
//             fileReader.readAsDataURL(uploadedImage);
//             fileReader.addEventListener("load", function () {
//                 setPreviewImage(this.result);
//             })
//         }
//     }




//     return (
//         <>
//             <div className='flex items-center justify-center mt-10'>
//                 <div className='flex items-center justify-center w-[70vw] md:w-[50vw] '>
//                     {/* <p>profile photo</p> */}
//                     {/* <label
//                         for='dropzone-file'
//                         className='flex flex-col items-center justify-center w-[50vw] md:w-[50vw]  h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
//                     >
//                         <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
//                             {previewImage ? (
//                                 <>
//                                     <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
//                                 </>
//                             ) : (
//                                 <>
//                                     <span className='font-semibold'>Click to upload</span>
//                                     <BsPersonCircle className='w-20 h-20 rounded-full m-auto text-white' />
//                                 </>
//                             )}
//                         </p>

//                         <input
//                             type='file'
//                         />
//                     </label> */}
//                     <label htmlFor="image_uploads" className="cursor-pointer">
//                         {previewImage ? (
//                             <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
//                         ) : (
//                             <BsPersonCircle className='w-20 h-20 rounded-full m-auto text-white' />
//                         )}
//                     </label>
//                     <input
//                         onChange={getImage}
//                         className="hidden"
//                         type="file"
//                         name="image_uploads"
//                         id="image_uploads"
//                     />
//                 </div>
//             </div>

//             <TextField
//                 id='name'
//                 label='full Name'
//                 variant='outlined'
//                 placeholder='Enter Your Name'
//                 fullWidth
//                 margin='normal'
//                 name='name'
//                 onChange={onInputChange}
//             />
//             <TextField
//                 id='email'
//                 label='E-mail'
//                 variant='outlined'
//                 placeholder='Enter Your E-mail Address'
//                 fullWidth
//                 margin='normal'
//                 name='email'
//                 onChange={onInputChange}

//             />
//             <TextField
//                 id='phone-number'
//                 label='Phone Number'
//                 variant='outlined'
//                 placeholder='Enter Your Phone Number'
//                 fullWidth
//                 margin='normal'
//                 name='contact'
//                 onChange={onInputChange}

//             />
//             <TextField
//                 id='alternate-phone'
//                 label='Alternate Phone'
//                 variant='outlined'
//                 placeholder='Enter Your Alternate Phone'
//                 fullWidth
//                 margin='normal'
//                 onChange={onInputChange}
//                 name='alternatePhone'
//             />
//             <TextField
//                 id='address'
//                 label='address'
//                 variant='outlined'
//                 placeholder='Enter Your Address'
//                 fullWidth
//                 margin='normal'
//                 onChange={onInputChange}
//                 name='address'
//             />
//             <div className='mx-20 flex items-center  justify-evenly  mb-20'>
//                 <div>
//                     <InputLabel id='demo-select-small-label'>Gender</InputLabel>
//                     <Select
//                         labelId='demo-select-small-label'
//                         id='demo-select-small'
//                         label='Age'
//                     >
//                         <MenuItem value=''>
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={10}>manus</MenuItem>
//                         <MenuItem value={20}>bai</MenuItem>
//                         <MenuItem value={30}>Other</MenuItem>
//                     </Select>
//                 </div>
//                 <div>
//                     <InputLabel id='demo-select-small-label'>batches</InputLabel>
//                     <Select
//                         labelId='demo-select-small-label'
//                         id='demo-select-small'
//                         // value={batch}
//                         label='Age'
//                     // onChange={handleChange}
//                     >
//                         <MenuItem value=''>
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={10}>7-8</MenuItem>
//                         <MenuItem value={20}>8-9</MenuItem>
//                         <MenuItem value={30}>9-10</MenuItem>
//                     </Select>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default InfoStep1


import React, { useState } from 'react';

const InfoStep1 = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        step1: {
            name: '',
            email: '',
            password: ''
        },
        step2: {
            photo: "",
            aadhar: ""
        },
        step3: {
            pan: "",
            bank: "",
            account: ""
        }
    });

    const handleChange = (step, value) => {
        setFormData(prevState => ({
            ...prevState,
            [step]: value
        }));
    };

    console.log(formData)
    const handleSubmit = () => {
        // Send formData to backend
        console.log(formData);
    };

    const handleNextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep(prevStep => prevStep - 1);
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-6 bg-gray-100 rounded-md">
            {/* Step 1 */}
            {step === 1 && (
                <div>
                    <h2 className="text-lg font-semibold mb-4">Step 1</h2>
                    <label htmlFor="">name</label>
                    <input
                        type="text"
                        value={formData.step1.name}
                        onChange={e => handleChange('step1', e.target.value)}
                        className="border rounded-md p-2 w-full"
                    />
                </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
                <div>
                    <h2 className="text-lg font-semibold mb-4">Step 2</h2>
                    aadhar
                    <input
                        type="text"
                        value={formData.step2.aadhar}
                        onChange={e => handleChange('step2', e.target.value)}
                        className="border rounded-md p-2 w-full"
                    />
                </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
                <div>
                    <h2 className="text-lg font-semibold mb-4">Step 3</h2>

                    <input
                        type="text"
                        value={formData.step3}
                        onChange={e => handleChange('step3', e.target.value)}
                        className="border rounded-md p-2 w-full"
                    />
                </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-6 flex justify-between">
                {step !== 1 && (
                    <button onClick={handlePrevStep} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                        Previous
                    </button>
                )}
                {step !== 3 ? (
                    <button onClick={handleNextStep} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                        Next
                    </button>
                ) : (
                    <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md">
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default InfoStep1;
