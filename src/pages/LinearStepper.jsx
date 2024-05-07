import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import InfoStep1 from '../components/stepper/InfoStep1'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userRegistration } from '../redux/slices/UserRegistrationSlice'
import InfoStep2 from '../components/stepper/InfoStep2'
import ScheduleStep3 from '../components/stepper/ScheduleStep3'

// import { TextField, makeStyles } from '@mui/material'

// const useStyles = makeStyles(theme => ({
//   button: {
//     marginRight: theme.spacing(1)
//   }
// }))

// const [data, setData] = useState({
//     name: "",
//     email: '',
//     contact: Number,
//     address: ""
// })
function getSteps() {
    return ['Basic information', 'Personal Document', 'schedule ', 'Payment']
}


function getStepContent(step) {
    switch (step) {
        case 0:
            return <InfoStep1 />

        case 1:
            return (
                <InfoStep2 />
            )
        case 2:
            return (
                <ScheduleStep3 />
            )
        case 3:
            return (
                <ScheduleStep3 />
            )
        default:
            return 'unknown step'
    }
}

const LinaerStepper = () => {
    // const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const [skippedSteps, setSkippedSteps] = useState([])
    const steps = getSteps()

    const isStepOptional = step => {
        return step === 1 || step === 2
    }

    const isStepSkipped = step => {
        return skippedSteps.includes(step)
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1)
        setSkippedSteps(skippedSteps.filter(skipItem => skipItem !== activeStep))
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }


    // const handleSkip = () => {
    //   if (!isStepSkipped(activeStep)) {
    //     setSkippedSteps([...skippedSteps, activeStep])
    //   }
    //   setActiveStep(activeStep + 1)
    // }


    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {}
                    const stepProps = {}
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant='caption'
                                align='center'
                                style={{ display: 'block' }}
                            >
                                optional
                            </Typography>
                        )
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant='h3' align='center'>
                    Thank You
                </Typography>
            ) : (
                <>
                    <form>{getStepContent(activeStep)}</form>
                    <Button
                        // className={classes.button}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        back
                    </Button>

                    <Button
                        // className={classes.button}
                        variant='contained'
                        color='primary'
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </>
            )}
        </div>
    )
}

export default LinaerStepper