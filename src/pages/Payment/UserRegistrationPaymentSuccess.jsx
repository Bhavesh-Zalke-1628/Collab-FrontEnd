import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Paper } from '@mui/material';
import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';

function UserRegistrationPaymentSuccess() {
    const [open, setOpen] = useState(false);
    function PaperComponent(props) {
        return (
            <Draggable
                handle="#draggable-dialog-title"
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} />
            </Draggable>
        );
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div class="bg-gray-100 mt-12 h-full flex items-center">
            <div class="bg-white p-6  md:mx-auto">
                <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div class="text-center">
                    <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>

                    <p> आपले रजिस्ट्रेशन यशस्वी झाले आहे  कृपया खालील दिलेला फिटनेस फॉर्म डाऊनलोड करा.</p>
                    <div class="py-10 text-center flex flex-col gap-5">
                        <a
                            class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-semibold py-3"
                            onClick={handleClickOpen}
                        >

                            Download form
                        </a>
                    </div>
                </div>
            </div>
            {
                <React.Fragment>
                    <Dialog
                        open={open}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                    >
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            Success
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <p className=' text-black text-xl'>
                                    फिटनेस फॉर्म यशस्वी डाऊनलोड झालेला आहे. तो डॉक्टरांच्या सल्ल्याले भरून आणा.
                                </p>
                            </DialogContentText>
                        </DialogContent>
                        <div className=' px-2 py-4 flex items-center justify-evenly'>
                            <div>
                                {/* <p className=' text-black font-semibold py-2'>सभासद  होण्या करी</p> */}
                                <Link
                                    to='/user/profile'
                                >
                                    <div
                                        className=' bg-green-400 text-gray-700  px-4 rounded-lg py-2 text-lg font-semibold cursor-pointer hover:bg-green-500 transition-all ease-in-out duration-300'
                                    >
                                        <button>
                                            OK
                                        </button>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </Dialog>
                </React.Fragment>
            }
        </div >
    )
}

export default UserRegistrationPaymentSuccess
