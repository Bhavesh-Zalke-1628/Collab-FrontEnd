import { FormControlLabel, Radio } from '@mui/material'
import React from 'react'

function PlanCard({ plan }) {
    // console.log(plan)
    return (
        <a
            href='#'
            class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative min-w-72'
        >
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {plan.planName}
            </h5>
            <div className='text-4xl font-semibold'> {plan.price}</div>
            <FormControlLabel
                value='under 18 with coaching'
                control={<Radio />}
                label={plan.planName}
            />
            {/* <input
                type='radio'
            /> */}
        </a>
    )
}

export default PlanCard
