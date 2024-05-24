import { FormControlLabel, Radio } from '@mui/material'
import React, { useState } from 'react'

function PlanCard({ plan }) {
    // console.log(plan)
    const [selectedCard, setSelectedCard] = useState(null);

    // Handle radio button change
    const handleRadioChange = (index) => {
        setSelectedCard(index);
    };
    console.log(plan)


    return (
        <>
            {
                plan && plan.map((card, index) =>
                    <a
                        href='#'
                        class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative min-w-72'
                    >
                        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            {card.planName}
                        </h5>
                        <div className='text-4xl font-semibold'>
                            {card.price}
                        </div>
                        <FormControlLabel
                            value='under 18 with coaching'
                            control={<Radio />}
                            label={card.planName}
                            name="cardRadio"
                            checked={selectedCard === index}
                            onChange={() => handleRadioChange(index)}
                        />
                        {/* <input
                type='radio'
            /> */}
                        {console.log(selectedCard)}
                    </a>
                )
            }

        </>
    )
}

export default PlanCard
