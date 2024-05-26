import { Button, FormControlLabel, Radio } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../../redux/slices/paymentSlice';
import { useNavigate } from 'react-router-dom';

function PlanCard({ plan, onSelect, index }) {

    const handleSelect = () => {
        onSelect(plan); // Call the callback with the selected plan
    };

    const [selectedCard, setSelectedCard] = useState(null);

    // Handle radio button change
    const handleRadioChange = (index) => {
        setSelectedCard(index);
    };

    console.log(selectedCard)

    return (
        <>
            {
                <a

                    className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative min-w-72'
                >
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        {plan.planName}
                    </h5>
                    <div className='text-4xl font-semibold'>
                        {plan.price}
                    </div>
                    <FormControlLabel
                        onClick={handleSelect}
                        value='under 18 with coaching'
                        control={<Radio />}
                        label={plan.planName}
                        name="cardRadio"
                        checked={selectedCard === index}
                        onChange={() => handleRadioChange(index)}
                    />
                </a>

            }

        </>
    )
}

export default PlanCard


// import React, { useState } from 'react';
// import { Button, FormControlLabel, Radio } from '@mui/material';

// function PlanCard({ plan, onSelect, index }) {
//     const [selectedCard, setSelectedCard] = useState(null);
//     console.log(index)
//     console.log(selectedCard)
//     // Handle radio button change
//     const handleRadioChange = () => {
//         setSelectedCard(index)
//         onSelect(plan._id); // Call the callback with the selected plan
//     };


//     return (
//         <div onClick={handleRadioChange}>
//             <a className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative min-w-72'>
//                 <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
//                     {plan.planName}
//                 </h5>
//                 <div className='text-4xl font-semibold'>
//                     {plan.price}
//                 </div>
//                 <FormControlLabel
//                     value={plan.planName}
//                     control={<Radio />}
//                     label={plan.planName}
//                     name="cardRadio"
//                     checked={selectedCard === index}
//                 />
//             </a>
//         </div>
//     );
// }

// export default PlanCard;
